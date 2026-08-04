"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef} from "react";
import gsap from "gsap";

export default function PageTransition({ children }: { children: React.ReactNode}) {
	const	pathname = usePathname();
	const	containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current)
			return ;

		gsap.fromTo (
			containerRef.current,
			{ opacity: 0, x: -200},
			{ opacity: 1, x: 0, duration: 1.2, ease: "power3.out"}
		);
	}, [pathname]);

	return (
		<div key={pathname} ref={containerRef}>
			{children}
		</div>
	);
}