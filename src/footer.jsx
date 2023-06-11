const Footer = () => {
	return (
		<>
			<h3 className=" text-center text-sm">
				Created by
				<a href="#_" className="relative px-1 py-1 group ml-2">
					<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 -translate-y-1 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
					<span className="absolute inset-0 w-full h-full border-2 border-black rounded-md"></span>
					<span className="relative font-medium">NickOD.xyz</span>
				</a>
			</h3>
		</>
	);
};

export default Footer;
