interface ITitleWrapperProps {
  labelText: string;
}

export default function TitleWrapper({ labelText }: ITitleWrapperProps) {
  return (
    <div className="flex flex-row p-6">
      <span className="text-white text-2xl">{labelText}</span>
    </div>
  );
}
