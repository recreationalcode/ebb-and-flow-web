import ServicePage from './ServicePage';
import THEMES from '../config/themes';

export default function LymphedemaLipedema({ setSchedule, navigate }) {
  return (
    <ServicePage
      title="Lymphedema and Lipedema Management"
      intro="Gentle, supportive care for swelling, heaviness, tenderness, and the day-to-day discomfort that can come with lymphedema or lipedema."
      whatItIs={
        <>
          <p>
            Lymphedema and lipedema are different conditions, but both can leave
            you feeling uncomfortable in your body.
          </p>
          <p>
            Lymphedema happens when lymph is not moving well and fluid builds up
            in the tissues. Lipedema is a condition that involves painful fat and
            tissue changes, often in the legs or arms, and it can sometimes
            overlap with lymphatic swelling. If those terms feel a little
            clinical, the simple version is that your body may feel heavy, full,
            sore, tender, swollen, or harder to move through than it used to.
          </p>
          <p>
            In these sessions, I use Manual Lymphatic Drainage and thoughtful,
            body-aware care to support comfort, ease, and mobility. I tailor the
            session to your body, your symptoms, and what feels manageable and
            supportive for you. Some people come in regularly as part of ongoing
            care, while others are just beginning to understand what their body
            has been dealing with.
          </p>
          <p>
            My focus is not on pushing through the body. It is working gently,
            respectfully, and in a way that supports how you want to feel in
            daily life.
          </p>
        </>
      }
      whoItIsFor={[
        'you are living with lymphedema or lipedema',
        'you experience heaviness, swelling, tenderness, or tissue sensitivity',
        'you want gentle bodywork that supports comfort and mobility',
        'you are looking for lymphatic support that feels attentive and individualized',
        'you want care that works alongside your broader treatment or self-care plan',
      ]}
      cautions="I do not diagnose lymphedema or lipedema. If you have sudden new swelling, redness, heat, fever, suspected infection, uncontrolled heart or kidney concerns, or any sign of a blood clot, please speak with your doctor first. If you wear compression garments or are under the care of a specialist, I am happy to work within that plan."
      price="$150"
      theme={THEMES['lymph-edema']}
      setSchedule={setSchedule}
      faqSection="lymphedema-lipedema"
      navigate={navigate}
    />
  );
}
