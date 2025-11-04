import LeadershipElders from "../components/LeadershipElders";
import LeadershipMinistry from "../components/LeadershipMinistry";
import LeadershipPastor from "../components/LeadershipPastor";

const LeadershipPage = () => {
  return (
    <>
      <LeadershipPastor />
      <LeadershipElders />
      <LeadershipMinistry />
    </>
  );
};

export default LeadershipPage;
