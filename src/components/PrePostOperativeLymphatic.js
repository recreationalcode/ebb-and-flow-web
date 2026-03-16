import ServicePage from './ServicePage';
import THEMES from '../config/themes';

export default function PrePostOperativeLymphatic({ setSchedule }) {
  return (
    <ServicePage
      title="Pre/Post-Op Lymphatic Massage"
      intro="Gentle lymphatic support before and after surgery to help you feel more comfortable, less swollen, and more supported during recovery."
      whatItIs={
        <>
          <p>
            Pre and post-op lymphatic massage is a gentle form of Manual
            Lymphatic Drainage that I use to support the body around surgery.
            Some clients book before a procedure because they want to prepare
            their body and go into surgery feeling as settled as possible. Others
            come in after surgery because they are dealing with swelling,
            pressure, bruising, or that tight, uncomfortable feeling that can
            come with recovery.
          </p>
          <p>
            This work is always gentle and adapted to where you are in the
            healing process. I follow your surgeon&rsquo;s guidance, your
            timeline, and what your body is ready for. My approach is not about
            forcing fluid to move or doing anything aggressive. It is about
            supporting comfort, circulation, and the body&rsquo;s natural
            recovery process in a careful way.
          </p>
          <p>
            Once you are further into healing, usually around 6 to 8 weeks out
            depending on the healing process and your surgeon&rsquo;s approval, I
            may also incorporate scar tissue work. This can help address that
            tight, pulling, stuck, or restricted feeling that sometimes shows up
            around a healed incision. Scar tissue work is also approached
            gradually and carefully, with respect for what your body is ready
            for.
          </p>
          <p>
            I also want clients to know that healing is not a race. Every body
            responds differently, and recovery can look different from person to
            person. My role is to support you where you are, not push you faster
            than your body is ready to go.
          </p>
        </>
      }
      whoItIsFor={[
        'you are preparing for an upcoming surgery',
        'you are recovering from surgery and feeling swollen, bruised, tight, or uncomfortable',
        'you want gentle support during the healing process',
        'you are looking for post-op bodywork that is calm, careful, and not overly intense',
        'you are 6 to 8 weeks out from surgery and want provider-approved scar tissue support',
        'you want care that takes your recovery timeline seriously',
      ]}
      cautions="If you have open incisions that have not been cleared, a fever, increasing redness or heat, unusual drainage, sudden swelling, calf pain, shortness of breath, or any concern for infection or a blood clot, please pause and contact your surgeon first. Depending on the procedure, timing, drains, medications, or complications, I may ask for medical clearance before booking. Scar tissue work is only appropriate once the incision is healed and you have been cleared by your provider."
      price="$150"
      theme={THEMES['lymph-operative']}
      setSchedule={setSchedule}
    />
  );
}
