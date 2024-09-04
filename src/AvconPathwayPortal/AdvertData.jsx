import React from 'react';
import ImageInfoCard from './ImageInfoCard';
import IAA from './AdvertImages/IAA.png'

export default function AdvertData() {

    const containerStyle = {
        display: 'flex',
        gap: '1%',
      };

  return (
    <div sx={{ padding: { xs: '0 2%', md: '0 5%' } }} style={containerStyle}>
      <ImageInfoCard
        imageUrl={IAA}
        title="The Irish Aviation Authority (IAA)"
        description="The Irish Aviation Authority (IAA) is a commercial semi-state company and the single
        civil aviation regulator for Ireland. The IAA is responsible for the regulation of safety,
        security and consumer interests. The company's responsibilities are set out in the
        framework of applicable global, European and national legislation/regulation."
        webURL="For Upcoming Career Opportunities, please refer to our Careers Section on the IAA
        website. https://www.iaa.ie/careers"
      />
      <ImageInfoCard
        imageUrl={IAA}
        title="The Irish Aviation Authority (IAA)"
        description="The Irish Aviation Authority is committed to safety promotion and high-quality
        training. We do this through online and in-class learning with industry experts and
        third-party specialists to provide world-class knowledge in aviation and safety-related
        subject areas."
        webURL="For upcoming training and courses, please refer to our Training Section on the IAA
        website. https://www.iaa.ie/training"
      />
    </div>
  );
}

