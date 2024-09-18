import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"textarea">;

export const Textarea = forwardRef<HTMLInputElement, InputProps>((props) => {
	return (
		<textarea
			{...props}
			className={twMerge(
				"px-4 py-2 h-32 resize-none bg-zinc-50 border-2 border-zinc-300 rounded-lg placeholder-zinc-400 outline-none text-sm focus-visible:border-sky-400 focus-visible:ring-4 ring-sky-400/15",
				props.className,
			)}
		/>
	);
});

Textarea.displayName = "textarea";
