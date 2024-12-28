import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imgClassName,
  img,
  id,
  titleClassName,
  SpareImg,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  titleClassName?: String;
  SpareImg?: string;
  img ?: string;
  imgClassName?: string;

}) => {
    function gradient(arg0: number, deg: any, arg2: any, arg3: number, arg4: any, arg5: number, arg6: any, arg7: number, arg8: any, arg9: number) {
        throw new Error("Function not implemented.");
    }
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(8,6,242,1) 0%, rgba(0,212,255,1) 100%)'
      }}
    >
        <div
            className={`font-sans text-lg lg:text-4xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          <div className="font-sans font-extralight md:max-w-100 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
        </div>
        
      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        
        
        
      </div>
    </div>
  );
};
