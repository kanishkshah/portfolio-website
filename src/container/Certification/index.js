import "./index.scss";

import CertificateCard from "../../components/CertificateCards";
import { Fade } from "react-reveal";
import React from "react";
import { certifications } from "../../portfolio";

const Certification = () => {
	return (
		<div className="certification">
			<Fade duration={2000} top distance="100px">
				<h1 data-aos="fade-down" data-aos-once>
					Courses and Certifications
				</h1>
			</Fade>

			<div className="certification__cards">
				{certifications.map((certificate, index) => {
					return (
						<Fade duration={2000} bottom key={index}>
							<CertificateCard certificate={certificate} />
						</Fade>
					);
				})}
			</div>
		</div>
	);
};

export default Certification;
