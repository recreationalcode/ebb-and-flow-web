import ScheduleButton from '@/src/ui/ScheduleButton';

const faqData = [
  {
    id: 'general',
    label: 'General',
    heading: 'General',
    questions: [
      {
        q: 'Where are you located?',
        a: (
          <>
            <p>
              I see clients at two locations in Washington, DC depending on the
              day of the week.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-3">
              <li>
                <strong>Downtown DC</strong>{' '}
                <span>
                  on Wednesdays &amp; Saturdays, inside the Yao Shan Center for
                  Chinese Medicine (910 17th St NW, Suite 1020).
                </span>
              </li>
              <li>
                <strong>Georgetown / Glover Park</strong>{' '}
                <span>
                  on Mondays, Tuesdays, Thursdays &amp; Fridays, inside DC Acupuncture
                  (2300 Wisconsin Ave NW, #400b).
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Both locations are available 9:00 AM &ndash; 5:00 PM. When you
              book, just pick the location and day that works best for you!
            </p>
          </>
        ),
      },
      {
        q: 'How do I book?',
        a: (
          <>
            <p>
              Sessions are available by appointment only, and a credit card is
              required to hold your spot. You can book online or by calling,
              texting, or emailing me if you have questions. If you like booking
              online, you can reserve multiple sessions up to 60 days in
              advance. I highly recommend it! It feels really good to have those spots
              secured.
            </p>
            <ScheduleButton className="mt-3" />
          </>
        ),
      },
      {
        q: 'When do I pay?',
        a: (
          <p>
            Full payment is due at the time of service. I accept cash, checks,
            and credit cards, including Visa, Mastercard, Discover, and American
            Express. HSA and FSA cards are also accepted.
          </p>
        ),
      },
      {
        q: 'Do you take insurance or provide a superbill?',
        a: (
          <p>
            I do not take insurance. I do provide emailed receipts at every
            visit and can send superbills at your request.
          </p>
        ),
      },
      {
        q: 'Should I book my post-op sessions ahead of time?',
        a: (
          <p>
            Yes, please. Post-op care tends to be most helpful when it is
            planned out in advance. Post-op MLD is time sensitive and typically
            requires anywhere from 10&ndash;12 appointments. I highly recommend
            booking those sessions ahead of time so you don&rsquo;t have the
            additional stress of scrambling for aftercare during recovery.
          </p>
        ),
      },
      {
        q: 'Can I get on a waitlist?',
        a: (
          <p>
            Yes, there&rsquo;s also an online waitlist for your convenience. At
            times my schedule can get pretty darn busy, but it is always
            changing! If you prefer to book online, check back often to see
            what&rsquo;s available or jump on the waitlist.
          </p>
        ),
      },
      {
        q: 'What is your cancellation policy?',
        a: (
          <>
            <p>
              <strong>24-Hour Rule:</strong> Because I hold a focused, dedicated
              space for every person on my schedule, I ask for 24 hours notice
              that is required to cancel or reschedule an appointment.
            </p>
            <p>
              Failure to cancel appointments at least 24 hours in advance or
              failure to show up for your appointment will result in a charge of
              100% of the scheduled session&rsquo;s fee which will be processed
              with the credit card on file.
            </p>
          </>
        ),
      },
      {
        q: "What if I'm running late?",
        a: (
          <p>
            I will always do my best to make the most of the time we still have,
            but your session will still need to end at the originally scheduled
            time.
          </p>
        ),
      },
      {
        q: "Which service should I book if I'm not sure?",
        a: (
          <p>
            Totally okay. If you are not sure which session fits best, reach out
            and I can help point you in the right direction based on what is
            going on in your body and what kind of support you are looking for.
          </p>
        ),
      },
      {
        q: 'Do I need provider approval before booking?',
        a: (
          <p>
            Sometimes, yes. I may ask for provider approval if you are within 72
            hours after surgery post-op, in your first trimester, high-risk or
            being closely monitored during pregnancy, in active cancer
            treatment, or dealing with a new infection, a suspected blood clot,
            or a more complex medical situation. If I think clearance is needed,
            I will let you know.
          </p>
        ),
      },
    ],
  },
  {
    id: 'manual-lymphatic-drainage',
    label: 'Manual Lymphatic Drainage',
    heading: 'Manual Lymphatic Drainage',
    questions: [
      {
        q: 'Is Manual Lymphatic Drainage right for me?',
        a: (
          <>
            <p>
              Maybe. MLD can be a great fit for people dealing with swelling,
              fluid retention, heaviness, post-op recovery, or simply that
              puffy, stuck feeling in the body. It is very gentle and works best
              when the session is matched to your health history and what is
              going on in your body.
            </p>
            <p>
              Still not sure if MLD is right for you? Any questions you may
              have, please contact at{' '}
              <a
                href="mailto:nat@ebbandflowmassagestudio.com"
                className="underline">
                nat@ebbandflowmassagestudio.com
              </a>
              .
            </p>
          </>
        ),
      },
      {
        q: 'When should I not book MLD?',
        a: (
          <>
            <p>
              If you have a fever, an active infection, a current or suspected
              blood clot, or new unexplained swelling, I want you to pause and
              check in with your doctor first. If you have a more complex
              medical picture, I may ask for provider approval before booking.
            </p>
            <p className="mt-3">
              <strong>Contraindications of MLD:</strong>
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-2">
              <li>
                <strong>Acute Inflammation</strong> &mdash; Typically caused by
                bacteria or viruses. Example: streptococcus or staphylococcus
                causing cellulitis or erysipelas. Tissue that is red, hot,
                painful, congested, and accompanied by a fever is not suitable
                to receive this treatment during this time.
              </li>
              <li>
                <strong>Congestive Heart Failure (CHF)</strong> &mdash; If you
                are unmedicated or if edema is due solely to cardiac
                failure/cardiac edema you are unable to receive MLD.
              </li>
              <li>
                <strong>Renal Failure</strong> &mdash; This is relative to the
                severity of your disease. I see clients with compromised kidney
                function with written physician approval. MLD is a powerful
                diuretic and will tax renal function temporarily. Your kidneys
                must be strong enough to receive treatment safely.
              </li>
              <li>
                <strong>Acute Deep Vein Thrombosis (DVT)</strong> &mdash; This
                is only during the acute phase. MLD is beneficial for
                post-thrombotic syndrome edema management.
              </li>
            </ul>
          </>
        ),
      },
      {
        q: 'What can I expect after an MLD session?',
        a: (
          <>
            <p>
              Think of your lymphatic system as the body&rsquo;s cleanup crew.
              It pulls out the things that don&rsquo;t belong in your tissues,
              which can sometimes cause a temporary reboot period. While many
              people leave feeling light, floaty, and energized, some experience
              that MLD aids in the detoxification process.
            </p>
            <p>
              This is just a short-term (1&ndash;2 day) body&rsquo;s response.
              As your body clears out the &ldquo;stagnant fluid,&rdquo; you
              might feel some flu-like symptoms&mdash;headaches, nausea,
              fatigue, or a little achiness. It&rsquo;s a sign that your body is
              doing the hard work of cleaning and repairing itself!
            </p>
            <p>
              My favorite analogy: Just like your phone powers down during a
              software update, your body needs a little downtime to install the
              &ldquo;new version&rdquo; of you.
            </p>
            <p>
              <strong>The Bottom Line:</strong> These changes vary from person
              to person, but they are normal and temporary. Usually after the
              first few sessions, people no longer experience these side effects
              due to their system being cleaner/healthier! Drink plenty of
              water, give yourself some grace, and get ready to feel amazing on
              the other side.
            </p>
          </>
        ),
      },
      {
        q: 'How can I support myself after a session?',
        a: (
          <>
            <p>
              Hydrate, keep the day fairly low-key if you can, and add in some
              easy movement like walking or stretching. Nothing dramatic. Think
              support, not boot camp.
            </p>
            <ol className="list-decimal list-outside pl-5 space-y-2 mt-3">
              <li>
                Limit caffeine and alcohol the day of your appointment to
                minimize mood swings and give your liver a break.
              </li>
              <li>
                Hydrate (with electrolytes) prior to your appointment and keep
                up the h2o intake afterwards.
              </li>
              <li>Prioritize sleep. It&rsquo;s where all the magic happens.</li>
              <li>
                Incorporate gentle movement before and after your session. Yoga,
                walking, Qigong, light rebounding, or breath work can help
                stimulate your lymphatic flow and keep things moving nicely.
              </li>
              <li>Epsom salt baths are great for aches and pains!</li>
              <li>
                Run your errands first. Symptoms can set in within hours after
                your appointment and you don&rsquo;t want to be at Trader
                Joe&rsquo;s tired, thirsty, and needing the bathroom to pee.
                Trust me on this one...
              </li>
            </ol>
          </>
        ),
      },
      {
        q: 'What are some signs my body might benefit from lymphatic support?',
        a: (
          <>
            <p>
              A lot of people seek MLD when they are dealing with puffiness,
              swelling, a heavy feeling in the limbs, post-op fluid buildup, or
              that general sense that their body feels congested or sluggish. It
              is not a diagnostic tool, but it can be a supportive part of care
              in the right situation.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-3">
              <li>
                <strong>Persistent Swelling (Edema):</strong> Swelling in the
                legs, ankles, hands (Is your ring a little tight?), or puffy
                face can signal a blockage in the lymphatic flow.
              </li>
              <li>
                <strong>Chronic Fatigue:</strong> Feeling like you are dragging
                through the day, constantly tired, even after a full
                night&rsquo;s sleep, can indicate that toxins are piling up in
                your system and leave you feeling sluggish.
              </li>
              <li>
                <strong>Frequent Infections or Illnesses:</strong> A weak immune
                system caused by poor lymphatic circulation may leave you more
                vulnerable to colds and other infections.
              </li>
              <li>
                <strong>Skin Problems:</strong> Acne, rashes, or unexplained
                puffiness may result from imbalanced buildup and can be your
                skin&rsquo;s way of saying it&rsquo;s overwhelmed by what is
                happening underneath.
              </li>
              <li>
                <strong>Unexplained Weight Gain:</strong> Fluid retention and
                toxin accumulation can make it difficult to lose weight, even
                with a healthy lifestyle.
              </li>
              <li>
                <strong>Morning Stiffness or Muscle Pain:</strong> Waking up
                with sore joints or stiff muscles (like a rusty tin man) might
                point to poor lymphatic drainage flow.
              </li>
              <li>
                <strong>Digestive Issues:</strong> If your digestion feels slow
                or you&rsquo;re dealing with that &ldquo;end of the day
                bloat&rdquo;, your lymphatic system might need a nudge.
                Bloating, constipation, or sluggish digestion are common signs
                of a stagnant lymphatic system.
              </li>
              <li>
                <strong>Cold Hands and Feet or Heavy Limbs:</strong> Poor
                circulation often results in a feeling of heaviness in your arms
                or legs. Do your arms or legs ever feel like you are wearing
                heavy weights? That heavy or tight feeling is often just excess
                fluid looking for an exit.
              </li>
              <li>
                <strong>Swollen Lymph Nodes:</strong> Tenderness or noticeable
                swelling in the neck, armpits, or groin can indicate your lymph
                nodes are struggling to filter waste effectively. Your immune
                system might just need a clearer path to get where they&rsquo;re
                going.
              </li>
            </ul>
          </>
        ),
      },
      {
        q: 'Do you do deep tissue massage?',
        a: (
          <>
            <p>
              Here&rsquo;s the deal: It&rsquo;s not about how deep one goes, but
              how you go deep. I&rsquo;m a big believer that you don&rsquo;t
              have to be &ldquo;bulldozed&rdquo; to get incredible results. In
              fact, my bodywork is rarely painful because I work with your
              nervous system instead of picking a fight with it.
            </p>
            <p>
              If you&rsquo;re looking for that &ldquo;no pain, no gain&rdquo;
              soreness that leaves you limping the next day, I&rsquo;m probably
              not your match. But if you want to find out how much your body can
              actually release when it feels focused and supported? That&rsquo;s
              where the magic happens. It&rsquo;s effective, it&rsquo;s
              science-backed, and yeah&mdash;it&rsquo;s legit!
            </p>
          </>
        ),
      },
      {
        q: 'Do you work with kids?',
        a: (
          <p>
            Yes, I offer pediatric lymphatic support. A parent or guardian needs
            to be present for the full session, sign a minor consent form, and
            stay in the room the entire time. For little ones under the age of
            5, I&rsquo;ve found that nap time is actually a great time for
            lymphatic work! Comfort is everything, feel free to bring a favorite
            blanket, stuffed animal, or book to help them settle in.
          </p>
        ),
      },
    ],
  },
  {
    id: 'pre-post-surgical',
    label: 'Pre & Post Surgical',
    heading: 'Pre & Post Surgical',
    questions: [
      {
        q: 'Should I get MLD before my surgery?',
        a: (
          <p>
            Absolutely. It can be a really nice way to support your body before
            surgery. I think of pre-op MLD like clearing traffic before roadwork
            starts. The goal is not to &ldquo;fix&rdquo; anything ahead of time,
            but to help your system feel a little less congested and a little
            more supported going into recovery.
          </p>
        ),
      },
      {
        q: 'When should I start MLD after my surgery?',
        a: (
          <p>
            That depends on your procedure and your surgeon&rsquo;s guidance.
            Some people are cleared pretty early, 72 hours to a week out from
            surgery, while others need more time. I always want the green light
            from your surgical team, and then I work within what your body is
            ready for.
          </p>
        ),
      },
      {
        q: 'Does the MLD massage hurt?',
        a: (
          <p>
            Not at all. Unlike traditional deep tissue massage, MLD uses an
            extremely light, rhythmic touch. Since your tissues are sensitive
            and inflamed from surgery, I work gently to map and move fluid
            without causing any pain or stress to your incisions.
          </p>
        ),
      },
      {
        q: 'How many sessions will I need?',
        a: (
          <>
            <p>
              Every body heals differently, but for surgical recovery, a series
              is most effective.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-3">
              <li>
                <strong>Acute Phase:</strong> 2&ndash;3 sessions per week for
                the first 2 weeks.
              </li>
              <li>
                <strong>Maintenance Phase:</strong> 1 session per week until
                swelling fully subsides.
              </li>
            </ul>
            <p className="mt-3">
              Some people want a short series close together in the early
              recovery window, and others taper out over time. If you are
              booking for surgery aftercare, I usually recommend planning ahead
              so your sessions are already in place and you are not scrambling
              later.
            </p>
          </>
        ),
      },
      {
        q: 'Will MLD affect my incisions or drains?',
        a: (
          <>
            <p>
              I work around drains and healing incisions, not aggressively on
              top of them. Once you are further along in healing and your
              provider has cleared you, I may also incorporate scar tissue work,
              usually around the 6 to 8 week mark depending on the procedure and
              your surgeon&rsquo;s guidance.
            </p>
            <p className="mt-3">
              <strong>Please note:</strong> I do not push fluid out of
              incisions.
            </p>
          </>
        ),
      },
      {
        q: 'What should I do to prepare for my session?',
        a: (
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>
              <strong>Hydrate:</strong> Drink plenty of water before and after
              your appointment.
            </li>
            <li>
              <strong>Wear Compression:</strong> If your surgeon has prescribed
              a compression garment (faja), bring it with you or wear it in. I
              can help you back into it after the session.
            </li>
            <li>
              <strong>Clearance:</strong> Ensure you have the &ldquo;green
              light&rdquo; from your surgical team to begin manual lymphatic
              drainage therapy.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: 'lymphedema-lipedema',
    label: 'Lymphedema & Lipedema',
    heading: 'Lymphedema & Lipedema',
    questions: [
      {
        q: 'How can lymphatic drainage help with lymphedema and lipedema?',
        a: (
          <>
            <p>
              Lymphatic drainage can be a really supportive part of care for
              both lymphedema and lipedema. The work is gentle, light, and very
              intentional. I am not trying to wrestle your body into submission
              here.
            </p>
            <p>
              For many people, it can help reduce swelling, ease that heavy or
              tight feeling, soften areas that feel stuck or dense, and make
              movement feel a little easier. Some clients also notice less
              tenderness and more comfort in their day-to-day life.
            </p>
            <p>
              The goal is not perfection. The goal is usually more comfort, more
              ease, and a body that feels a little less like it is fighting you.
            </p>
          </>
        ),
      },
      {
        q: "What's the difference between lymphedema and lipedema?",
        a: (
          <>
            <p>
              This is one of the biggest questions I get, so here&rsquo;s the
              simple version:
            </p>
            <p>
              <strong>Lymphedema</strong> is mostly a fluid issue. It happens
              when lymph is not moving well, so fluid starts to build up in the
              tissues.
            </p>
            <p>
              <strong>Lipedema</strong> is mostly a fat and connective tissue
              issue. It usually shows up as painful, stubborn fat buildup, most
              often in the legs and sometimes the arms, often on both sides of
              the body.
            </p>
            <p>
              They can look similar at first, but they are not the same thing.
              And yes, just to make things more fun and challenging, some people
              can have both.
            </p>
            <p>
              I do not diagnose lymphedema or lipedema, but I do provide
              supportive bodywork for people living with these conditions.
            </p>
          </>
        ),
      },
      {
        q: 'What does lymphedema usually feel like?',
        a: (
          <>
            <p>People with lymphedema often describe it as:</p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-2">
              <li>swelling, usually in one arm or one leg</li>
              <li>heaviness or tightness</li>
              <li>skin that feels smooth, thick, or full</li>
              <li>tenderness or discomfort</li>
              <li>
                sometimes pitting, where pressing into the tissue leaves an
                indent
              </li>
            </ul>
            <p className="mt-3">
              It can happen after surgery, injury, infection, radiation, or
              sometimes from birth. Can be present in men and women.
            </p>
          </>
        ),
      },
      {
        q: 'What does lipedema usually feel like?',
        a: (
          <>
            <p>
              Lipedema often has a different vibe. People usually describe it
              as:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-2">
              <li>painful or tender tissue</li>
              <li>swelling or fullness in both legs, both arms, or both</li>
              <li>tissue that feels lumpy, nodular, or bumpy to the touch</li>
              <li>fat that does not seem to respond to diet or exercise</li>
              <li>
                a feeling of heaviness, soreness, or &ldquo;why do my legs feel
                like they are carrying weighted baggage?&rdquo;
              </li>
            </ul>
            <p className="mt-3">
              Lipedema is most common in women and often shows up around
              hormonal shifts like puberty, pregnancy, or menopause. It can also
              run in families.
            </p>
          </>
        ),
      },
      {
        q: 'How do I know whether I have lymphedema or lipedema?',
        a: (
          <>
            <p>
              I do not diagnose, but I can tell you the general pattern.
              Lymphedema is more often fluid, and it can affect the full hand
              and fingers or the feet and toes. Lipedema is more often about
              painful fat and tissue changes, and it usually stops at the wrists
              or ankles instead of going into the hands or feet.
            </p>
            <p>
              If you are not sure which one you are dealing with, or whether you
              may have both, that is a good conversation to have with a
              qualified medical provider.
            </p>
          </>
        ),
      },
      {
        q: 'Can lymphatic drainage help if my tissue feels hard or fibrotic?',
        a: (
          <p>
            It can often be helpful, yes. When tissue starts to feel dense,
            firm, or stuck, lymphatic work may help soften things over time and
            improve comfort and mobility. I work gradually and pay attention to
            how your body responds.
          </p>
        ),
      },
      {
        q: 'Do you work with different stages of lymphedema and lipedema?',
        a: (
          <>
            <p>Yes, but I like to keep the explanation simple.</p>
            <p>
              Both lymphedema and lipedema can progress over time, which is why
              early support can be helpful. In earlier stages, people may notice
              more swelling, tenderness, or heaviness. In later stages, tissue
              may feel firmer, denser, or more limiting.
            </p>
            <p>
              My job is to meet your body where it is now, not where some chart
              says it &ldquo;should&rdquo; be.
            </p>
          </>
        ),
      },
      {
        q: 'Can lymphatic drainage help me move more easily?',
        a: (
          <>
            <p>
              It often can. When swelling, heaviness, or tissue tenderness go
              down, movement can feel less uncomfortable and less exhausting.
            </p>
            <p>
              I am not promising cartwheels, but I am very much here for helping
              your body feel more mobile.
            </p>
          </>
        ),
      },
      {
        q: 'Will this cure my lymphedema or lipedema?',
        a: (
          <>
            <p>No. I would never frame it that way.</p>
            <p>
              Lymphatic drainage is supportive care. For many people, it can be
              an important part of managing symptoms, improving comfort, and
              helping them feel better in their body. But it is not a magic
              wand, and I am not here to sell you one.
            </p>
          </>
        ),
      },
      {
        q: 'What can I do at home to support myself?',
        a: (
          <>
            <p>
              There is a lot you can do outside the treatment room that can help
              support your body. A few of the big ones:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 mt-2">
              <li>stay hydrated</li>
              <li>
                keep up with gentle movement like walking, walking in water or
                swimming, or yoga
              </li>
              <li>
                wear compression garments if they have been prescribed for you
              </li>
              <li>take good care of your skin</li>
              <li>
                focus on habits that help your body feel less inflamed and less
                overwhelmed
              </li>
            </ul>
            <p className="mt-3">
              Think steady and supportive, not extreme and punishing.
            </p>
          </>
        ),
      },
      {
        q: 'Do compression garments matter?',
        a: (
          <>
            <p>
              They can, especially for lymphedema and for some people with
              lipedema. If compression has been prescribed for you, it can be a
              really helpful part of your care plan for managing swelling and
              staying more comfortable.
            </p>
            <p>Sexy answer? No. Useful answer? Yes.</p>
          </>
        ),
      },
      {
        q: 'What kind of exercise is usually helpful?',
        a: (
          <>
            <p>
              Usually the gentle, consistent kind. Walking, walking in water or
              swimming, stretching, yoga, and other low-impact movements are
              often a better fit than going from zero to bootcamp energy
              overnight.
            </p>
            <p>
              Your lymphatic system generally likes rhythm and consistency more
              than chaos.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'fertility-pregnancy-postpartum',
    label: 'Fertility, Pregnancy & Postpartum',
    heading: 'Fertility, Pregnancy & Postpartum',
    questions: [
      {
        q: "What if I'm trying to get pregnant?",
        a: (
          <>
            <p>
              Absolutely! Lymphatic drainage for fertility is a complement to
              both natural and assisted fertility. Lymphatic drainage for
              fertility, IVF, and egg retrieval helps the body reduce
              inflammation. I do not promise outcomes, but it can be a gentle
              way to support comfort, relaxation, and a better sense of
              connection to your body.
            </p>
            <p>Think of it as preparing the soil before planting a garden.</p>
          </>
        ),
      },
      {
        q: 'How soon should I start fertility or IVF lymphatic drainage?',
        a: (
          <p>
            That really depends on what is going on for you and where you are in
            the process. Some people come in before starting treatment, some
            during certain parts of the process, and some simply want supportive
            care during a high-stress season. If you are unsure about timing,
            feel free to reach out and I can help you think through what makes
            the most sense.
          </p>
        ),
      },
      {
        q: 'Is lymphatic drainage safe in pregnancy?',
        a: (
          <p>
            Yes. You may benefit from lymphatic drainage for pregnancy in all
            trimesters, unless you are high risk or being closely monitored and
            then your doctor may not recommend it. I do require your
            doctor&rsquo;s approval during the first trimester to make sure that
            I am on the same page for your safety.
          </p>
        ),
      },
      {
        q: 'What does a pregnancy lymphatic session feel like?',
        a: (
          <p>
            This treatment is very light and safe at any time. Light, rhythmic
            pressure is used to improve the flow of the lymphatic system. Many
            moms-to-be describe it as a &ldquo;nervous system nap.&rdquo;
          </p>
        ),
      },
      {
        q: 'How often should I come in during pregnancy?',
        a: (
          <p>
            Depending on how many symptoms you are experiencing you may choose
            to receive treatments weekly to monthly. Some clients love a weekly
            flush to keep the swelling down while others find a monthly reset is
            plenty. Listen to your body, usually as your pregnancy progresses
            you may feel a bit tighter and might find relief from receiving more
            regular sessions. Go with what feels supportive and realistic.
          </p>
        ),
      },
      {
        q: 'What about postpartum care?',
        a: (
          <>
            <p>
              Postpartum sessions are tailored to where you are with swelling
              and healing. If you are dealing with breast swelling, engorgement,
              or a clogged duct, gentle lymphatic work may help reduce some of
              that pressure and fullness, which can sometimes make feeding or
              latching feel easier for your baby.
            </p>
            <p>
              If you are further out from birth and have provider approval, I
              may also incorporate scar tissue work, especially after a
              C-section, to help with that tight, restricted, or numb feeling
              around a healed scar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'oncology-massage',
    label: 'Oncology Massage',
    heading: 'Oncology Massage',
    questions: [
      {
        q: 'What makes oncology massage different from regular massage?',
        a: (
          <p>
            It is massage that is carefully adapted to what your body has been
            through. I think of it like custom-tailored care. The pressure,
            pace, positioning, and areas I work with are all chosen with your
            comfort, symptoms, and medical history in mind.
          </p>
        ),
      },
      {
        q: 'Do I need to prepare for my session?',
        a: (
          <p>
            Not in any way. Come exactly as you are. If you are tired, tender,
            overwhelmed, or just not feeling like your usual self, that is okay.
            If you need to stay in your comfy clothes, I can work around this.
            If you need to nap during the session, please do!
          </p>
        ),
      },
      {
        q: 'What if I have a port, scars, radiation changes, lymph nodes removed or lymphedema risk?',
        a: (
          <p>
            That is exactly why oncology massage is adapted so carefully. I work
            with those considerations in mind and adjust the session to support
            comfort and safety.
          </p>
        ),
      },
      {
        q: 'Do you coordinate with medical providers?',
        a: (
          <p>
            Yes, when needed. I am always happy to work within your care plan
            and to have you get provider approval if your situation calls for
            it.
          </p>
        ),
      },
      {
        q: 'What is the goal of oncology massage?',
        a: (
          <p>
            Supportive care. The goal is not to &ldquo;fix&rdquo; your body. It
            is to help you feel more comfortable, more grounded, and more cared
            for while your body is already doing a lot.
          </p>
        ),
      },
    ],
  },
  {
    id: 'craniosacral-therapy',
    label: 'Craniosacral Therapy',
    heading: 'Craniosacral Therapy',
    questions: [
      {
        q: 'What is a Craniosacral session like?',
        a: (
          <>
            <p>
              Think of it like a deep sigh for your nervous system. You stay
              fully clothed on the table, and I use a very gentle touch to
              listen to areas of tension and help your system settle. It is
              subtle work, but that does not mean it is small.
            </p>
            <p>
              A typical visit is 60 minutes of quiet, focused time just for you.
              Whether you feel a big shift or just a quiet reset, your body is
              doing the work of coming back into balance.
            </p>
          </>
        ),
      },
      {
        q: 'Is Craniosacral Therapy really that gentle?',
        a: (
          <p>
            Yes. I use a very gentle touch to evaluate tension patterns or
            imbalances in your body. It&rsquo;s not about force; it&rsquo;s
            about listening to what your tissues need.
          </p>
        ),
      },
      {
        q: 'What might I feel during a session?',
        a: (
          <p>
            That part varies. Some people feel deeply relaxed. Some feel warmth,
            unwinding, heaviness, spaciousness, or just a sense that their body
            is finally not working so hard. Some people simply enjoy an hour of
            quiet and leave feeling more grounded.
          </p>
        ),
      },
      {
        q: 'What is Craniosacral Therapy good for?',
        a: (
          <p>
            People often book it when they feel stressed, overstimulated, wired,
            tense, or emotionally overloaded. I think of it as a good fit for
            the person whose body never quite seems to come fully off duty.
          </p>
        ),
      },
    ],
  },
];

export default faqData;
