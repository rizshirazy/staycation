import React from 'react';
import Rating from 'elements/Rating';

import TestimonyAccent from 'assets/images/img-testi-frame.jpg';
import Button from 'elements/Button';

const Testimony = ({ data }) => {
	return (
		<section className='container'>
			<div className='row align-items-center'>
				<div className='col-auto' style={{ marginRight: 50 }}>
					<div
						className='testimonial-hero'
						style={{ margin: `30px 0 0 30px` }}>
						<img
							src={data.imageUrl}
							alt='Testimonial'
							className='position-absolute'
							style={{ zIndex: 2 }}
						/>
						<img
							src={TestimonyAccent}
							alt='Testimonial frame'
							className='position-absolute'
							style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
						/>
					</div>
				</div>
				<div className='col'>
					<h4 style={{ marginBottom: 40 }}>{data.name}</h4>
					<Rating
						value={data.rate}
						width={35}
						height={35}
						spacing={4}
					/>
					<h5 className='h2 font-weight-light line-height-2 my-3'>
						{data.content}
					</h5>
					<span className='text-gray-500'>
						{data.familyName}, {data.familyOccupation}
					</span>

					<div>
						<Button
							className='btn px-5'
							style={{ marginTop: 40 }}
							hasShadow
							isPrimary
							tyle='link'
							href={`/testimonial/${data._id}`}>
							Read Their Stories
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimony;
