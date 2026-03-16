import ServicePage from './ServicePage';
import THEMES from '../config/themes';

export default function OncologyMassage({ setSchedule }) {
  return (
    <ServicePage
      title="Oncology Massage"
      intro="Thoughtfully adapted massage for people in treatment, recovery, or survivorship who want care that feels safe, gentle, and supportive."
      whatItIs={
        <>
          <p>
            Oncology massage is massage therapy that I carefully adapt for people
            who are in active treatment, in recovery, or living in survivorship
            after cancer.
          </p>
          <p>
            I think of it like custom-tailored care. Just like clothing that is
            made to fit the person wearing it, this work is shaped around what
            your body has been through and what it needs that day. The pressure,
            pace, positioning, and areas I work with are all adjusted with care.
          </p>
          <p>
            Cancer treatment can affect the body in a lot of ways. Surgery,
            radiation, chemotherapy, fatigue, neuropathy, swelling, scar tissue,
            ports, and lymphedema risk can all change what feels comfortable and
            what is appropriate in a session. So an oncology massage is not just
            a regular massage with a different name. It is massage that is
            thoughtfully modified to support safety, comfort, and ease.
          </p>
          <p>
            Some people come in because they want help with tension, soreness,
            fatigue, or that feeling of being disconnected from their body. Some
            simply want a place where they can exhale and be cared for without
            having to explain everything. My goal is to meet you where you are
            and offer work that feels safe, gentle, and supportive.
          </p>
        </>
      }
      whoItIsFor={[
        'you are in active treatment and want massage that is adapted with care',
        'you are recovering from treatment and want gentle support',
        'you are living with fatigue, tension, soreness, or neuropathy-related discomfort',
        'you want bodywork that respects your energy, comfort, and medical history',
        'you want a space where your body is approached thoughtfully and without pressure',
      ]}
      cautions="If you are in active treatment or recent recovery, I may need information about ports, radiation sites, lymphedema risk, bone involvement, labs, medications, or surgery history. Please pause and get medical guidance first if you have a fever, infection, very low blood counts, current skin breakdown, a suspected blood clot, high fracture risk, or a scan scheduled within 24 hours, such as a PET scan."
      price="$130"
      theme={THEMES['oncology']}
      setSchedule={setSchedule}
    />
  );
}
