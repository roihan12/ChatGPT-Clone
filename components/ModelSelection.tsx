"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());


const ModelSelection = () => {
  const { data, isLoading } = useSWR("models", fetchModels);

  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
 
  return (
    <div className="mt-2 mb-2">
      <Select
        className="mt-2"
        options={data?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isLoading={isLoading}
        menuPosition="fixed"
        isSearchable
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
