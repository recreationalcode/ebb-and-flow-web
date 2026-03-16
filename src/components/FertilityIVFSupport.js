import ServicePage from './ServicePage';
import THEMES from '../config/themes';

export default function FertilityIVFSupport({ setSchedule }) {
  return (
    <ServicePage
      title={<span>Fertility and IVF<br/>Support Massage</span>}
      intro="Gentle, supportive bodywork for people moving through fertility care, IVF, or egg retrieval recovery who want a little more comfort and grounding along the way."
      whatItIs={
        <>
          <p>
            Fertility and IVF support massage is gentle, lymphatic-focused
            bodywork for people who want supportive care during fertility
            treatment. This can be a physically and emotionally intense process,
            and many clients come in because they are feeling bloated, tender,
            puffy, crampy, or just worn down by everything their body is moving
            through.
          </p>
          <p>
            I use a light, careful approach to support relaxation, comfort, and a
            greater sense of ease in the body. Depending on where you are in your
            cycle or treatment plan, I adjust the session so it feels supportive
            rather than too much. Some sessions may focus more on calming the
            nervous system, while others may be about helping you feel less
            swollen and more comfortable.
          </p>
          <p>
            This work is not a fertility treatment, and I do not promise
            outcomes. I see it as supportive care for your body during a time
            when you may need more softness, more rest, and a place to feel
            cared for.
          </p>
        </>
      }
      whoItIsFor={[
        'you are going through IVF or fertility treatment',
        'you are recovering from egg retrieval and feeling bloated, crampy, or tender',
        'you want gentle bodywork during a stressful or emotionally demanding season',
        'you are looking for support that feels calming and body-aware',
        'you want care that respects the timing and sensitivity of fertility treatment',
      ]}
      cautions="Please let me know where you are in your cycle and whether you are preparing for egg retrieval, recovering from a procedure, between appointments, or post-transfer. Depending on timing and how you are feeling, I may ask you to wait, modify the session, or get guidance from your medical team before booking."
      price="$150"
      theme={THEMES['lymph-fertility']}
      setSchedule={setSchedule}
    />
  );
}
