const Footer = () => {
	return (
		<div className='cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden'>
			{/* <div className='copyright'>
				<p className='text-[#333] font-poppins'>Copyright © 2023</p>
			</div> */}
			<div className='social'>
				<ul>
					<li className='mr-[15px] inline-block'>
						<a
							className='text-[#333]'
							href='#'
						>
							<img
								className='svg inline-block'
								src='assets/img/svg/social/linkedin.svg'
								alt='image'
							/>
						</a>
					</li>
					{/* <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/twitter.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/instagram.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/dribbble.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/tik-tok.svg"
                alt="image"
              />
            </a>
          </li> */}
				</ul>
			</div>
		</div>
	)
}
export default Footer
