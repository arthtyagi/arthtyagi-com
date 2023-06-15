interface List {
  listType: "ordered" | "unordered";
  items: React.ReactNode[];
}

export default function StyledLists({ listType, items }: List) {
  return (
    <>
      {items.map((item) => (
        <>
          <div className="relative flex h-6 w-6 flex-none items-center justify-center">
            {listType === "ordered" ? (
              <p className="absolute text-xs font-medium text-gray-900">
                {items.indexOf(item) + 1}
              </p>
            ) : (
              <div className="h-1.5 w-1.5 rounded-full ring-1 ring-gray-300" />
            )}
          </div>
          <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
            <span className="font-medium text-gray-900">{item}</span>{" "}
          </p>
        </>
      ))}
    </>
  );
}
