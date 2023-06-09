import React from "react";

const Footer = () => {
	return (
		<>
			<h3 className=" text-center text-sm">
				Created by
				<a href="#_" class="relative px-1 py-1 group ml-2">
					<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 -translate-y-1 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
					<span class="absolute inset-0 w-full h-full border-2 border-black"></span>
					<span class="relative">NickOD.xyz</span>
				</a>
			</h3>
		</>
	);
};

export default Footer;
