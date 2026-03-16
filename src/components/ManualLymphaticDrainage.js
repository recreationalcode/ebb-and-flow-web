import ServicePage from './ServicePage';
import THEMES from '../config/themes';

export default function ManualLymphaticDrainage({ setSchedule }) {
  return (
    <ServicePage
      title="Manual Lymphatic Drainage"
      intro="Gentle, rhythmic bodywork to support lymph flow, reduce that heavy or puffy feeling, and help you feel more at ease in your body."
      whatItIs={
        <>
          <p>
            Manual Lymphatic Drainage, or MLD, is a gentle type of bodywork that
            helps support the flow of lymph through the body. Lymph is a fluid
            that moves through your lymphatic system and helps clear waste and
            move excess fluid.
          </p>
          <p>
            I often describe the lymphatic system as the body&rsquo;s drainage
            and cleanup network. When it is flowing well, things move along more
            easily. When it gets a little backed up, you might notice puffiness,
            heaviness, swelling, or just that feeling that your body is holding
            onto more than it needs to.
          </p>
          <p>
            This work is very light and rhythmic. It is not deep tissue, and it
            is not meant to be forceful. In fact, it is usually much gentler than
            people expect. My goal is not to push your body, but to support it in
            a way that feels calming, soothing, and effective.
          </p>
          <p>
            People come in for Manual Lymphatic Drainage for all kinds of
            reasons, including swelling, fluid retention, lymphatic maintenance,
            recovery support, or simply because they want to feel lighter and
            more comfortable in their body. I tailor each session to what is
            going on for you that day and what feels most supportive for your
            system.
          </p>
        </>
      }
      whoItIsFor={[
        'you feel swollen, puffy, heavy, or congested in your body',
        'you are dealing with fluid retention',
        'you want lymphatic maintenance as part of your regular wellness routine',
        'you are looking for gentle support during a recovery period',
        'you want bodywork that feels calming rather than intense',
      ]}
      cautions="Manual Lymphatic Drainage may not be the right fit right now if you have a fever, an active infection, a current or suspected blood clot, new unexplained swelling, or certain uncontrolled medical conditions. If you are pregnant, postpartum, under active cancer care, recovering from a major medical event, or have a more complex health history, I may ask you to get medical clearance before your session."
      price="$150"
      theme={THEMES['lymph-mld']}
      setSchedule={setSchedule}
    />
  );
}
