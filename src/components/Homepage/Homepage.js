import React from 'react'
import Banner from './BannerPic/Banner';
import BusinessSummery from './Business Summery/BusinessSummery';
import SelectItem from './SelectItem/SelectItem';
import HomeTools from './Tools/HomeTools';
import ExtraSection from './TwoExtraSection/ExtraSection';
import ExtraSection2 from './TwoExtraSection/ExtraSection2';





const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <SelectItem></SelectItem>
      <ExtraSection></ExtraSection>
      <HomeTools></HomeTools>
      <ExtraSection2></ExtraSection2>
      <BusinessSummery></BusinessSummery>
    </div>

  );
}

export default Homepage;
