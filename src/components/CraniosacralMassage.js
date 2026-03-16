import ServicePage from './ServicePage';
import THEMES from '../config/themes';

export default function CraniosacralMassage({ setSchedule }) {
  return (
    <ServicePage
      title="Craniosacral Therapy"
      intro={<>A quiet, gentle therapy that helps the body soften, settle, and come out of that constant &ldquo;on&rdquo; mode.</>}
      whatItIs={
        <>
          <p>
            Craniosacral Therapy, or CST, is a gentle hands-on therapy that uses
            light touch to help the body settle, soften, and release tension
            patterns.
          </p>
          <p>
            I often explain it as giving your nervous system a chance to turn the
            volume down. Sometimes the body gets stuck in a kind of
            constant &ldquo;on&rdquo; mode, where stress, tension,
            overstimulation, or emotional strain build up over time. Craniosacral
            Therapy can help create a little more quiet and space, so your system
            does not have to work quite so hard.
          </p>
          <p>
            The work is subtle, but that does not mean it is insignificant. I use
            a gentle touch to listen to where your body may be holding stress or
            strain, and I support it in finding a little more ease. Rather than
            forcing anything to happen, I am working with your body in a slower,
            more responsive way.
          </p>
          <p>
            People often book Craniosacral Therapy when they are feeling tense,
            overwhelmed, wired, emotionally overloaded, or disconnected from
            themselves. Many people leave feeling more grounded, more settled, and
            deeply relaxed.
          </p>
          <p>
            Sessions are done fully clothed on the table, with plenty of support
            and bolstering as needed. It is quiet work, but it can have a very
            real effect on how you feel.
          </p>
        </>
      }
      whoItIsFor={[
        'you feel stressed, overstimulated, or like your body never fully relaxes',
        'you feel emotionally overloaded or disconnected from yourself',
        'you want a gentler approach than traditional massage',
        'you are looking for support that feels grounding and calming',
        'you respond well to slower, subtler bodywork',
      ]}
      cautions="Because Craniosacral Therapy uses such light pressure, it is often well tolerated, but it is not right for everyone. If you have a recent concussion or brain injury, acute neurological symptoms, recent cranial bleeding, uncontrolled medical concerns, or anything your physician has asked you to avoid, please get medical clearance first."
      price="$150"
      theme={THEMES['craniosacral']}
      setSchedule={setSchedule}
    />
  );
}
