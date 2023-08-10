import { IColors, colors } from "@/theme/colors";

type PaletteProps = {
  name: IColors;
};

export function Palette(props: PaletteProps) {
  const { name } = props;
  return (
    <div className="flex flex-wrap gap-5 pb-5">
      {Object.entries(colors[name]).map(([key, value]) => (
        <div key={key} className="flex w-[150px] items-center gap-2">
          <div className="h-14 w-14 rounded shadow" style={{ backgroundColor: value }} />
          <div>
            <p className="!m-0 pb-1 !text-xs font-semibold">
              {name}-{key}
            </p>
            <p className="!m-0 pt-1 !text-xs">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
