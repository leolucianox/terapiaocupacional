import { cn } from "@/lib/utils";

type WaveProps = {
  /** Cor do preenchimento da onda (classe de text-color do Tailwind). */
  className?: string;
  /** Inverte verticalmente para encaixar no topo de uma seção. */
  flip?: boolean;
};

/**
 * Divisor orgânico suave entre seções. Decorativo — escondido de leitores de tela.
 */
export function Wave({ className, flip = false }: WaveProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none -mt-px leading-[0]">
      <svg
        className={cn("block h-12 w-full md:h-20", flip && "rotate-180", className)}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,112 480,16 720,40 C960,64 1200,120 1440,80 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
