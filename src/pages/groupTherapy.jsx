import { GroupAbout } from "../components/GroupTherapy/groupAbout"
import { GroupBenefits } from "../components/GroupTherapy/groupBenefits"
import { GroupEffect } from "../components/GroupTherapy/groupEffect"
import { GroupFooter } from "../components/GroupTherapy/groupFooter"
import { GroupPromo } from "../components/GroupTherapy/groupPromo"
import { GroupPsychologists } from "../components/GroupTherapy/groupPsychologists"
import { GroupReality } from "../components/GroupTherapy/groupReality"
import { GroupSchedule } from "../components/GroupTherapy/groupSchedule"
import { GroupSession } from "../components/GroupTherapy/groupSession"


export const GroupTherapy = () => {
    return (
        <>
          <GroupPromo/>
          <GroupReality/>
          <GroupAbout />
          <GroupSession/>
          <GroupSchedule/>
          <GroupEffect/>
          <GroupPsychologists/>
          <GroupBenefits/>
          <GroupFooter/>
        </>
    )
}