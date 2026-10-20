import { InterviewQuestion } from '../types';

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  // 1. General Interview Questions
  {
    id: 'gen-1',
    category: 'General Interview Questions',
    questionEn: 'Tell me about yourself.',
    questionJa: '自己紹介をお願いします。 (Jikoshoukai o onegaishimasu.)',
    questionSi: 'ඔබ ගැන කෙටි හැඳින්වීමක් කරන්න.',
    sampleAnswerEn: 'Thank you for this opportunity. My name is [Your Name], and I have a background in [Your Field/Profession, e.g., hospitality / IT / customer relations]. Over the past [Number] years, I have developed strong skills in [Key Skill 1] and [Key Skill 2]. I am dedicated, quick to adapt to multicultural environments, and enthusiastic about contributing positively to your organization.',
    sampleAnswerJa: 'はじめまして。[あなたの名前]と申します。[専門分野・職種]で[年数]年間の実務経験がございます。チームワークと適応力を強みとしており、貴社で貢献したいと考えております。本日はどうぞよろしくお願いいたします。',
    explanationSi: 'මෙම ප්‍රශ්නයේදී සම්මුඛ පරීක්ෂකවරයා බලාපොරොත්තු වන්නේ ඔබේ පෞද්ගලික විස්තර නොව, ඔබේ අධ්‍යාපනික හා වෘත්තීය පසුබිම, ප්‍රධාන දක්ෂතා සහ මෙම රැකියාවට ඔබේ ඇති උනන්දුව පිළිබඳ සංක්ෂිප්ත, විශ්වාසදායක සාරාංශයකි.',
    personalizationTip: 'Keep your answer between 60 to 90 seconds. Focus on your present professional role, past relevant achievements, and why this future opportunity fits your path.'
  },
  {
    id: 'gen-2',
    category: 'General Interview Questions',
    questionEn: 'What are your strengths?',
    questionJa: 'あなたの長所は何ですか？ (Anata no chousho wa nan desu ka?)',
    questionSi: 'ඔබගේ ප්‍රධාන ශක්තීන් සහ දක්ෂතා මොනවාද?',
    sampleAnswerEn: 'One of my greatest strengths is my reliability and attention to detail. In my previous work, I consistently ensured high-quality results even under tight schedules. Additionally, I communicate clearly with teammates and remain calm and solution-oriented when unexpected challenges arise.',
    sampleAnswerJa: '私の長所は、責任感と丁寧な仕事ぶりです。予期せぬトラブルが発生した際も落ち着いて原因を分析し、周囲と連携して迅速に解決策を見つけることができます。',
    explanationSi: 'මෙහිදී ඔබේ වෘත්තියට අදාළ වන සැබෑ දක්ෂතාවක් උදාහරණයක් සහිතව පැහැදිලි කරන්න. කණ්ඩායම් හැඟීම, වෙලාවට වැඩ කිරීම, හෝ ගැටළු විසඳීමේ හැකියාව වැනි ප්‍රායෝගික ගුණාංග සඳහන් කිරීම වැදගත් වේ.',
    personalizationTip: 'Pick 1 or 2 real strengths that match the job description, and always pair them with a brief practical example from your real work experience.'
  },
  {
    id: 'gen-2b',
    category: 'General Interview Questions',
    questionEn: 'What are your weaknesses?',
    questionJa: 'あなたの短所は何ですか？ (Anata no tansho wa nan desu ka?)',
    questionSi: 'ඔබේ දුර්වලතා හෝ වැඩිදියුණු කරගත යුතු කරුණු මොනවාද?',
    sampleAnswerEn: 'In the past, I sometimes found it difficult to say no when coworkers asked for assistance, which occasionally overloaded my schedule. To manage this constructively, I started prioritizing my daily task list and communicating my current bandwidth respectfully so I can maintain high quality on all my commitments.',
    sampleAnswerJa: '私の短所は、頼まれた仕事を断りきれず抱え込みがちになる点でした。現在はタスクの優先順位を明確にし、状況を周囲に率直に共有して無理のない計画を立てるよう改善しております。',
    explanationSi: 'දුර්වලතාවක් ගැන විමසන විට, රැකියාවට බරපතල හානියක් නොවන කරුණක් තෝරාගෙන, එය ජය ගැනීමට ඔබ දරන උත්සාහය (action plan) ප්‍රකාශ කරන්න. කිසිවිටෙකත් "මට කිසිම දුර්වලතාවක් නැහැ" යැයි නොකියන්න.',
    personalizationTip: 'Always choose a real, manageable area for growth and immediately follow up with the steps you take daily to improve.'
  },
  {
    id: 'gen-3',
    category: 'General Interview Questions',
    questionEn: 'Why do you want this job?',
    questionJa: 'なぜこの仕事を志したのですか？ (Naze kono shigoto o shibou shita no desu ka?)',
    questionSi: 'ඔබ මෙම රැකියාව සඳහා අයදුම් කිරීමට හේතුව කුමක්ද?',
    sampleAnswerEn: 'I have researched your company and deeply respect your commitment to quality and professional standards. This position aligns directly with my career goals and hands-on skills in [Your Field]. I want to bring my dedication to your team while continuing to grow and learn in a supportive international environment.',
    sampleAnswerJa: '貴社が持つ高い品質基準とプロフェッショナリズムに深く感銘を受けました。私の[スキル・経験]を活かし、チームの目標達成に貢献したいと考え、強く志望いたしました。',
    explanationSi: 'ආයතනය ගැන ඔබ සොයා බලා ඇති බව පෙන්වන්න. ආයතනයේ වටිනාකම් සහ ඔබේ වෘත්තීය ඉලක්ක එකිනෙක ගැළපෙන ආකාරය අවංකව විස්තර කරන්න.',
    personalizationTip: 'Mention a specific aspect of the company, hotel, or organization that impressed you during your pre-interview research.'
  },
  {
    id: 'gen-4',
    category: 'General Interview Questions',
    questionEn: 'Why should we hire you?',
    questionJa: '私たちがあなたを採用すべき理由は何ですか？ (Watashitachi ga anata o saiyou subeki riyuu wa nan desu ka?)',
    questionSi: 'අප ඔබව මෙම තනතුර සඳහා තෝරාගත යුත්තේ ඇයි?',
    sampleAnswerEn: 'You should hire me because I offer a unique combination of relevant skills, a strong work ethic, and a positive attitude. I am dedicated to punctuality and eager to absorb new procedures quickly. I treat employer responsibilities with sincerity and take pride in delivering dependable results.',
    sampleAnswerJa: '業務に対する誠実な姿勢と、新しい環境への迅速な適応力があるからです。指示された業務を正確にこなすだけでなく、チーム全体の円滑な運営に積極的に貢献できます。',
    explanationSi: 'අනෙක් අය සමඟ සංසන්දනය කිරීමෙන් තොරව, ඔබේ කැපවීම, වේලාවට වැඩ කිරීම, නව දේවල් ඉගෙනීමේ උනන්දුව සහ ආයතනයට ලබාදිය හැකි වටිනාකම අවධාරණය කරන්න.',
    personalizationTip: 'Focus on your trustworthiness, willingness to follow workplace rules, and steady dedication.'
  },
  {
    id: 'gen-5',
    category: 'General Interview Questions',
    questionEn: 'How do you handle challenges at work?',
    questionJa: '仕事で困難に直面したとき、どのように対処しますか？ (Shigoto de konnan ni chokumen shita toki, dono you ni taisho shimasu ka?)',
    questionSi: 'සේවා ස්ථානයේදී මතුවන අභියෝග හෝ ගැටළු ඔබ නිරාකරණය කරගන්නේ කෙසේද?',
    sampleAnswerEn: 'When facing a challenge, I first stay calm and assess the root cause of the issue. I prioritize practical solutions, seek advice from supervisors when appropriate, and communicate transparently. Afterward, I reflect on what happened to prevent similar issues from recurring.',
    sampleAnswerJa: 'まずは焦らず冷静に状況を把握し、原因を分析します。自分で対応できる範囲を確認しつつ、必要に応じて速やかに上司に相談・報告（報連相）を行い、再発防止策を講じます。',
    explanationSi: 'මෙහිදී බලන්නේ ඔබ පීඩනය හමුවේ කලබල නොවී සන්සුන්ව ප්‍රශ්නය වටහාගෙන, අවශ්‍ය නම් උසස් නිලධාරීන්ගේ උපදෙස් ලබාගනිමින් ක්‍රියාත්මක වන ආකාරයයි.',
    personalizationTip: 'Use a real brief scenario where you stayed calm, communicated with your team, and solved a problem systematically.'
  },
  {
    id: 'gen-6',
    category: 'General Interview Questions',
    questionEn: 'What are your career goals?',
    questionJa: 'あなたの将来のキャリア目標は何ですか？ (Anata no shourai no kyaria mokuhyou wa nan desu ka?)',
    questionSi: 'ඔබේ ඉදිරි වෘත්තීය ඉලක්ක මොනවාද?',
    sampleAnswerEn: 'In the short term, I want to master my job duties, adapt thoroughly to your workplace standards, and become a dependable team member. In the long term, I aspire to take on greater responsibilities, enhance my technical and language capabilities, and contribute to mentoring new team members.',
    sampleAnswerJa: '短期的には、業務手順を完璧に習得し、信頼されるメンバーになることです。長期的には、専門スキルと語学力をさらに高め、チームをリードできる人材へと成長したいと考えています。',
    explanationSi: 'කෙටි කාලීන (මුල් මාස කිහිපය තුළ කාර්යයන් නිවැරදිව ඉගෙනීම) සහ දිගු කාලීන (ආයතනය තුළ වර්ධනය වීම හා වැඩි වගකීම් දැරීම) ඉලක්ක සමබරව දක්වන්න.',
    personalizationTip: 'Ensure your goals show stability and long-term commitment to the employer rather than treating the job as a stepping stone.'
  },
  {
    id: 'gen-7',
    category: 'General Interview Questions',
    questionEn: 'How do you work in a team?',
    questionJa: 'チームでどのように協力して働きますか？ (Chiimu de dono you ni kyouryoku shite hatarakimasu ka?)',
    questionSi: 'ඔබ කණ්ඩායමක් තුළ සහයෝගයෙන් සේවය කරන්නේ කෙසේද?',
    sampleAnswerEn: 'I believe effective teamwork is built on active listening, clear communication, and mutual respect. I always deliver my assigned responsibilities on time, offer support to teammates when needed, and maintain a cooperative, positive attitude so the entire team succeeds together.',
    sampleAnswerJa: 'お互いを尊重し、明確な報告・連絡・相談を行うことを心がけています。自分の役割を責任を持って果たすと同時に、困っている同僚を助け合い、チーム全体の目標達成に向けて協力します。',
    explanationSi: 'කණ්ඩායම් හැඟීම විමසන විට, තමාගේ වගකීම නියමිත වේලාවට ඉටු කිරීම, අනෙක් අයට ගෞරවයෙන් සවන් දීම සහ අන්‍යෝන්‍ය සහයෝගය ලබාදීම පිළිබඳ අවධාරණය කරන්න.',
    personalizationTip: 'Provide an example where you contributed to a shared workplace success.'
  },

  // 2. Japanese Interview Practice
  {
    id: 'jp-intro',
    category: 'Japanese Interview Practice',
    questionEn: 'How would you introduce yourself in Japanese?',
    questionJa: '日本語で自己紹介をしてください。 (Nihongo de jikoshoukai o shite kudasai.)',
    questionSi: 'ජපන් භාෂාවෙන් ඔබේ ස්වයං හැඳින්වීමක් (Jikoshoukai) සිදු කරන්නේ කෙසේද?',
    sampleAnswerEn: 'Hajimemashite. Watashi wa [Your Name] to moushimasu. Suriranka kara mairimashita. Senkou wa [Your Field / Major] desu. Nihon de takusan no koto o manabi, seiippai hatarakitai to omotte orimasu. Douzo yoroshiku onegaishimasu.',
    sampleAnswerJa: '初めまして。私は[名前]と申します。スリランカから参りました。専攻は[専攻・専門]です。日本で多くの技術を学び、誠心誠意仕事に取り組みたいと考えております。どうぞよろしくお願いいたします。',
    explanationSi: 'ජපන් සම්මුඛ පරීක්ෂණයක් ආරම්භයේදී අනිවාර්යයෙන්ම "ජිකෝෂෝකායි" (ස්වයං හැඳින්වීම) විමසයි. මෙහිදී නම, උපන් රට (ශ්‍රී ලංකාව), ප්‍රධාන ක්ෂේත්‍රය, ජපානයේ වැඩ කිරීමට ඇති කැපවීම සහ "දෝසෝ යොරොෂිකු ඔනෙගායිෂිමාස්" ආචාරශීලී වචන නිවැරදි උච්චාරණයෙන් පැවසීම ඉතා වැදගත් වේ.',
    personalizationTip: 'Practice this aloud until it flows naturally and smoothly without stuttering, with a clear standing bow (Rei).'
  },
  {
    id: 'jp-1',
    category: 'Japanese Interview Practice',
    questionEn: 'Why do you want to work in Japan?',
    questionJa: '日本で働きたい理由は何ですか？ (Nihon de hatarakitai riyuu wa nan desu ka?)',
    questionSi: 'ඔබ ජපානයේ සේවය කිරීමට කැමති වන්නේ ඇයි?',
    sampleAnswerEn: 'I have always admired Japan\'s advanced technology, work discipline, and high service quality. Working in Japan will allow me to learn international best practices, enhance my Japanese language proficiency, and build a stable professional career while contributing honestly to the Japanese economy.',
    sampleAnswerJa: '日本の高い技術力、規律正しさ、そして「おもてなし」の心に以前から深い敬意を抱いておりました。日本で働き、国際水準の技術を身につけ、日本語力を向上させながら誠実に貢献したいと考えております。',
    explanationSi: 'ජපානය තෝරාගැනීමට හේතුව විමසන විට, ජපානයේ සේවා සංස්කෘතිය (work discipline), තාක්ෂණය, සේවා ගුණාත්මකභාවය සහ භාෂාව ඉගෙනීම කෙරෙහි ඔබේ ඇති සැබෑ කැමැත්ත ප්‍රකාශ කරන්න.',
    personalizationTip: 'Connect your interest to the Japanese language training you have undertaken with Let\'s Go Japan and your dedication to learning Japanese manners.'
  },
  {
    id: 'jp-2',
    category: 'Japanese Interview Practice',
    questionEn: 'Tell me your strengths and weaknesses in Japanese interview format.',
    questionJa: '長所と短所を教えてください。 (Chousho to tansho o oshiete kudasai.)',
    questionSi: 'ඔබේ ශක්තීන් (දක්ෂතා) සහ දුර්වලතා පිළිබඳව පැහැදිලි කරන්න.',
    sampleAnswerEn: 'My strength is perseverance; I never give up easily when learning complex tasks. As for a weakness, I sometimes focus so deeply on details that I double-check repeatedly. To balance this, I set time limits for each task and communicate regularly with my supervisor to maintain efficiency.',
    sampleAnswerJa: '長所は粘り強さで、困難な課題にも諦めずに取り組みます。短所は細部にこだわりすぎて確認に時間をかける傾向がある点です。現在は作業ごとに時間配分を意識し、迅速に進めるよう改善に努めています。',
    explanationSi: 'දුර්වලතාවක් පවසන විට, එය ඔබේ කාර්යයට විශාල හානියක් නොවන එකක් විය යුතු අතර, එය මඟහරවා ගැනීමට ඔබ ගන්නා පියවර (solution) අනිවාර්යයෙන්ම සඳහන් කළ යුතුය.',
    personalizationTip: 'Never say "I have no weaknesses". Acknowledging a manageable habit and explaining how you manage it shows mature self-awareness.'
  },
  {
    id: 'jp-3',
    category: 'Japanese Interview Practice',
    questionEn: 'How do you practice the Japanese "Hou-Ren-Sou" principle?',
    questionJa: '「報連相（ほうれんそう）」をどのように実践していますか？ (Hou-Ren-Sou o dono you ni jissen shite imasu ka?)',
    questionSi: 'ජපන් සේවා ස්ථානවල භාවිතා වන "හෝ-රෙන්-සෝ" (වාර්තා කිරීම, සම්බන්ධීකරණය, උපදෙස් ලබාගැනීම) ක්‍රමය ඔබ ප්‍රායෝගිකව භාවිතා කරන්නේ කෙසේද?',
    sampleAnswerEn: 'I understand that Hou-Ren-Sou (Hokoku = Report, Renraku = Communicate, Sodan = Consult) is the backbone of Japanese teamwork. I report task completions and any delays immediately, communicate updates to all concerned teammates, and consult my senior colleagues whenever I encounter ambiguity before making unilateral assumptions.',
    sampleAnswerJa: '業務の進捗や問題が発生した際は、自己判断せず速やかに上司へ「報告」し、関係者への「連絡」を徹底し、疑問や判断に迷う点は事前に「相談」することを心がけています。',
    explanationSi: 'ජපන් ආයතනයක වැඩ කිරීමේදී තනිවම තීරණ නොගෙන, ප්‍රධානීන් දැනුවත් කිරීම, තොරතුරු හුවමාරු කරගැනීම සහ උපදෙස් ලබාගැනීම (Report, Communicate, Consult) අතිශය තීරණාත්මක පිළිවෙතකි.',
    personalizationTip: 'Emphasize that you never hide small mistakes; you report them immediately so the team can address them together.'
  },

  // 3. HR Interview Questions
  {
    id: 'hr-1',
    category: 'HR Interview Questions',
    questionEn: 'Where do you see yourself in 3 to 5 years?',
    questionJa: '3〜5年後、どのようになっていたいですか？ (San kara go nen go, dono you ni natte itai desu ka?)',
    questionSi: 'ඉදිරි වසර 3 සිට 5 දක්වා කාලය තුළ ඔබ සිටීමට බලාපොරොත්තු වන්නේ කුමන මට්ටමකද?',
    sampleAnswerEn: 'In three to five years, I envision myself as a senior, fully competent professional within this organization. I hope to have mastered all advanced workplace systems, achieved higher certifications, and earned the trust to guide and support junior team members.',
    sampleAnswerJa: '3年から5年後には、業務全般に精通した中核メンバーとして信頼され、より責任のある業務を担い、後輩の育成にも貢献できる人材になっていたいと考えております。',
    explanationSi: 'මෙහිදී HR නිලධාරීන් සොයා බලන්නේ ඔබේ ස්ථාවරභාවය (stability) සහ ආයතනය තුළ රැඳී සිටිමින් අඛණ්ඩව වර්ධනය වීමට ඇති සැබෑ උනන්දුවයි.',
    personalizationTip: 'Show that you are committed to realistic professional growth inside the organization rather than frequently job-hopping.'
  },
  {
    id: 'hr-2',
    category: 'HR Interview Questions',
    questionEn: 'How do you handle working overtime or on busy shifts?',
    questionJa: '残業や繁忙期のシフトには対応できますか？ (Zangyou ya hankyouki no shifuto ni wa taiou dekimasu ka?)',
    questionSi: 'අවශ්‍ය අවස්ථාවලදී අතිකාල (Overtime) හෝ කාර්යබහුල වැඩමුර වල සේවය කිරීමට ඔබට හැකිද?',
    sampleAnswerEn: 'Yes, I fully understand that peak operational periods and urgent customer requirements occasionally require overtime or shift adjustments. I am physically fit, flexible with my schedule, and ready to support the team whenever business demands require it.',
    sampleAnswerJa: 'はい、繁忙期や突発的な業務が発生した際は、業務の円滑な進行のために柔軟に残業やシフト変更に対応いたします。健康管理にも日頃から留意しております。',
    explanationSi: 'ජාත්‍යන්තර ආයතන, විශේෂයෙන් හෝටල් ක්ෂේත්‍රය, කර්මාන්තශාලා හෝ සේවා අංශවල කාර්යබහුල අවස්ථාවලදී සහයෝගය දැක්වීමට ඔබේ ඇති නම්‍යශීලී බව සහ සූදානම තහවුරු කරන්න.',
    personalizationTip: 'Highlight your good physical health and readiness to collaborate during critical company delivery times.'
  },
  {
    id: 'hr-3',
    category: 'HR Interview Questions',
    questionEn: 'Why did you leave (or why are you planning to leave) your current job?',
    questionJa: '前職の退職理由（転職理由）を教えてください。 (Zenshoku no taishoku riyuu o oshiete kudasai.)',
    questionSi: 'ඔබ පෙර සේවය කළ රැකියාවෙන් ඉවත් වීමට හේතුව කුමක්ද?',
    sampleAnswerEn: 'I am deeply grateful for the experience and skills I gained with my previous employer. However, I am seeking new challenges in an international environment where I can expand my global perspective, utilize my language abilities, and take on broader professional responsibilities.',
    sampleAnswerJa: '前職では多くのことを学ばせていただき感謝しております。さらに国際的な環境で視野を広げ、語学力と専門性を高めながら新たな挑戦をしたいと考え、転職を決意いたしました。',
    explanationSi: 'කිසිවිටකත් පෙර ආයතනයට හෝ කළමනාකාරීත්වයට දොස් නොකියන්න. ඔබ ඉදිරියට යාමටත්, නව කුසලතා අත්පත් කරගැනීමටත් දක්වන ධනාත්මක උනන්දුව පමණක් අවධාරණය කරන්න.',
    personalizationTip: 'Keep the explanation strictly positive and forward-looking, emphasizing growth and international career progression.'
  },

  // 4. English Interview Practice
  {
    id: 'eng-1',
    category: 'English Interview Practice',
    questionEn: 'How do you work in a team with people from different cultural backgrounds?',
    questionJa: '異文化のチームメンバーとどのように協働しますか？ (Ibunkawa no chiimu menbaa to dono you ni kyoudou shimasu ka?)',
    questionSi: 'විවිධ සංස්කෘතික පසුබිම් සහිත කණ්ඩායම් සාමාජිකයන් සමඟ ඔබ සහයෝගයෙන් කටයුතු කරන්නේ කෙසේද?',
    sampleAnswerEn: 'I value active listening, mutual respect, and clear communication. When working with multicultural colleagues, I remain patient, respect diverse customs, and ensure that instructions and common goals are understood by everyone. Team harmony leads to the best collective outcome.',
    sampleAnswerJa: '多様性を尊重し、相手の意見に耳を傾けることを最も大切にしています。お互いの文化や価値観を理解し合い、共通の目的に向かって協力することで、強いチームワークを築きます。',
    explanationSi: 'ඩුබායි, ජපානය හෝ මාලදිවයින වැනි රටවල සේවය කිරීමේදී බහු-සංස්කෘතික (multicultural) කණ්ඩායම් හමුවන බැවින්, අන්‍යෝන්‍ය ගෞරවය සහ ඉවසීම පෙන්වීම ඉතා වැදගත් වේ.',
    personalizationTip: 'Describe how you maintain courteous tone, open-mindedness, and focus on the common mission of the workplace.'
  },
  {
    id: 'eng-2',
    category: 'English Interview Practice',
    questionEn: 'Can you describe a time when you received constructive criticism and how you handled it?',
    questionJa: 'フィードバックや指摘を受けた際、どのように対応しましたか？ (Fiidobakku ya shiteki o uketa sai, dono you ni taiou shimashita ka?)',
    questionSi: 'ඔබේ සේවය පිළිබඳව කළමනාකාරිත්වයෙන් හෝ ප්‍රධානියෙකුගෙන් උපදෙසක් හෝ විවේචනයක් ලැබුණු විට ඔබ ඊට මුහුණ දුන්නේ කෙසේද?',
    sampleAnswerEn: 'I appreciate constructive feedback because it helps me improve. In a previous role, my supervisor suggested that I improve the formatting of my shift handover notes. I thanked them sincerely, reviewed the recommended template immediately, and adopted the new format consistently moving forward.',
    sampleAnswerJa: '建設的なご指摘は成長の機会として真摯に受け止めます。前職でも上司からアドバイスをいただいた際は、感謝の意を伝え、すぐに業務の改善に取り組みました。',
    explanationSi: 'මෙහිදී සම්මුඛ පරීක්ෂකවරයා බලන්නේ ඔබ විවේචන හමුවේ කේන්ති නොගෙන, එය තමාගේ වෘත්තීය ගුණාත්මකභාවය වැඩිදියුණු කරගැනීමට අවස්ථාවක් කරගන්නේ කෙසේද යන්නයි.',
    personalizationTip: 'Show that you listen without defensiveness, express gratitude for guidance, and take immediate corrective action.'
  },

  // 5. Workplace Communication
  {
    id: 'comm-1',
    category: 'Workplace Communication',
    questionEn: 'What would you do if you made an error during your work duties?',
    questionJa: '業務でミスをしてしまった場合、どうしますか？ (Gyoumu de misu o shite shimatta baai, dou shimasu ka?)',
    questionSi: 'රාජකාරියේදී ඔබ අතින් වරදක් සිදුවුවහොත් ඔබ මුලින්ම කුමක් කරන්නේද?',
    sampleAnswerEn: 'If I realize I made a mistake, I immediately inform my supervisor without hiding or delaying. I explain the exact facts honestly, apologize for the inconvenience, and propose an immediate corrective action to minimize any impact on customers or the team.',
    sampleAnswerJa: 'ミスに気づいた時点で隠さず、速やかに上司へありのままの事実を報告して謝罪します。その後、被害を最小限に抑える対策を講じ、同じ過ちを繰り返さないための改善策を徹底します。',
    explanationSi: 'ජාත්‍යන්තර ආයතනවල අවංකභාවය අංක එක වේ. වැරැද්දක් සැඟවීම හෝ ප්‍රමාද කිරීම බරපතල වරදක් වන අතර, වහාම ප්‍රධානියාට දන්වා පිළියම් යෙදීම වගකිවයුතු සේවකයෙකුගේ ලක්ෂණයකි.',
    personalizationTip: 'Honesty and speed of reporting are always rewarded far more than trying to cover up an issue.'
  },
  {
    id: 'comm-2',
    category: 'Workplace Communication',
    questionEn: 'How do you ensure clear communication when language barriers arise?',
    questionJa: '言葉の壁がある場合、どのように正確なコミュニケーションをとりますか？ (Kotoba no kabe ga aru baai, dono you ni seikaku na komyunikeeshon o torimasu ka?)',
    questionSi: 'භාෂා ගැටළු හෝ තේරුම් ගැනීමේ අපහසුතා ඇති වූ විට ඔබ නිවැරදි සන්නිවේදනයක් පවත්වා ගන්නේ කෙසේද?',
    sampleAnswerEn: 'I speak slowly and clearly, avoid confusing slang, and use simple, standard vocabulary. I frequently confirm understanding by politely paraphrasing key points, using written notes or diagrams where helpful, and never pretending to understand when I am uncertain.',
    sampleAnswerJa: '専門用語や早口を避け、丁寧かつ分かりやすい表現を用います。また、重要な指示は復唱して確認し、メモや図表を活用して双方の認識にズレがないよう努めます。',
    explanationSi: 'නොතේරුණු දෙයක් තේරුණා සේ හිස වැනීමෙන් වළකින්න. සන්සුන්ව පැහැදිලි කරගැනීම (clarification), නැවත තහවුරු කරගැනීම (confirming) සහ ලිඛිත සටහන් භාවිතය ඉතා අගය කෙරේ.',
    personalizationTip: 'Never be afraid to say: "Could you please repeat that slowly? I want to make sure I carry out your instructions accurately."'
  },

  // 6. Career Preparation FAQs
  {
    id: 'faq-c0',
    category: 'Career Preparation FAQs',
    questionEn: 'Are these career materials educational resources, and does GlobeLink sell job placements?',
    questionJa: 'このキャリア資料は教育・準備リソースですか？またGlobeLinkは雇用の斡旋販売を行っていますか？ (Kono kyaria shiryou wa kyouiku/junbi risousu desu ka? Mata GlobeLink wa koyou no assen hanbai o okonatte imasu ka?)',
    questionSi: 'මෙම සම්මුඛ පරීක්ෂණ මාර්ගෝපදේශ හුදෙක් අධ්‍යාපනික සම්පත්ද? GlobeLink ආයතනය රැකියා අවස්ථා මුදලට විකුණනු ලබන්නේද?',
    sampleAnswerEn: 'These interview questions, practice tools, and CV guidelines are strictly educational preparation resources designed to equip candidates with authentic communication skills and international confidence. GlobeLink Education and Migration Consultants is an educational advisory and migration consultancy; we do not sell job placements, we do not operate as an employment agency, and we never make false promises of guaranteed hiring. All employment decisions are made independently by foreign employers based solely on candidate merit and authentic qualifications.',
    sampleAnswerJa: '当資料および模擬面接ツールは、求職者が自らのスキル・語学力・ビジネスマナーを向上させるための純粋な教育・準備リソースです。GlobeLinkは就職の斡旋販売を行う機関ではなく、雇用の保証は一切いたしません。採用の可否は、各受入企業・雇用主が候補者の能力に基づき公正に判断します。',
    explanationSi: 'මෙම සියලුම ප්‍රශ්නෝත්තර සහ පුහුණු මෙවලම් හුදෙක් අපේක්ෂකයන්ගේ කුසලතා, භාෂා හැකියාව සහ වෘත්තීය නිපුණතාව ඉහළ නැංවීමේ අධ්‍යාපනික සම්පත් පමණි. GlobeLink ආයතනය කිසිදු රැකියා අවස්ථාවක් මුදලට විකිණීම හෝ ව්‍යාජ රැකියා පොරොන්දු ලබාදීම සිදු නොකරයි. විදේශීය සේවායෝජකයන් විසින් අපේක්ෂකයාගේ සැබෑ දක්ෂතාවය මත පමණක් සෘජු බඳවාගැනීම් සිදුකරනු ලැබේ.',
    personalizationTip: 'Honest and authentic preparation always produces the highest success rate. Focus on showcasing your real skills truthfully.'
  },
  {
    id: 'faq-c1',
    category: 'Career Preparation FAQs',
    questionEn: 'How should I structure my international CV for Gulf and Japanese employers?',
    questionJa: '海外企業向けの履歴書・職務経歴書はどのように作成すべきですか？ (Kaigai kigyou muke no rirekisho wa dono you ni sakusei subeki desu ka?)',
    questionSi: 'මැදපෙරදිග (Gulf) සහ ජපන් ආයතන සඳහා CV පත්‍රිකාවක් සකස් කරගත යුත්තේ කෙසේද?',
    sampleAnswerEn: 'For Gulf employers (Dubai/UAE/Maldives), use a clean 2-page reverse-chronological format highlighting quantifiable duties, relevant technical tools, and verified certifications. For Japan, prepare both an English format and the traditional Japanese Rirekisho with an authentic photo and accurate educational timelines.',
    explanationSi: 'ගල්ෆ් රටවල් සඳහා කෙටි, සෘජු, ප්‍රතිඵල පෙන්වන (ATS compliant) CV පත්‍රිකාවක් ද, ජපානය සඳහා ජපන් ආකෘතියේ රිරෙකිෂෝ (Rirekisho) පත්‍රිකාවක් ද පිළියෙල කිරීම සුදුසුය.',
    personalizationTip: 'GlobeLink Career Partner consultants provide 1-on-1 resume transformation according to target destination standards.'
  },
  {
    id: 'faq-c2',
    category: 'Career Preparation FAQs',
    questionEn: 'What are the essential tips for passing an international virtual video interview?',
    questionJa: 'オンライン面接（Web面接）を成功させるための重要ポイントは何ですか？ (Onrain mensetsu o seikou saseru tame no juuyou pointo wa nan desu ka?)',
    questionSi: 'අන්තර්ජාලය ඔස්සේ පවත්වන වීඩියෝ සම්මුඛ පරීක්ෂණයකට (Online Interview) සාර්ථකව මුහුණ දීමට වැදගත් උපදෙස් මොනවාද?',
    sampleAnswerEn: 'Test your camera, microphone, and internet connection 30 minutes in advance. Dress in full professional corporate attire. Sit in a quiet, well-lit room with a clean background. Look directly at the camera lens to maintain natural eye contact, speak with steady pace, and keep a notepad ready.',
    explanationSi: 'කල්තියා තාක්ෂණික පරීක්ෂාව සිදුකිරීම, නිහඬ ආලෝකමත් ස්ථානයක් තෝරාගැනීම, විධිමත් ඇඳුමෙන් සැරසීම සහ කැමරාව දෙස බලා කතා කිරීම ඉතා වැදගත් වේ.',
    personalizationTip: 'Conduct a mock call with a friend or GlobeLink mentor prior to your official interview to calibrate audio levels.'
  }
];

export const CAREER_GUIDANCE_MODULES = [
  {
    id: 'mod-1',
    title: 'CV & Resume Modernization',
    subtitle: 'Gulf Standard & Japanese Rirekisho Formats',
    description: 'Transform traditional biodatas into modern, ATS-friendly executive CVs tailored specifically for Gulf employers (UAE/Dubai, Maldives) and dual-language Japanese application forms.',
    points: [
      'Removal of outdated biodata formatting and excessive personal trivia',
      'Action-verb bullet points quantifying achievements and responsibilities',
      'Japanese Rirekisho & Shokumu-Keirekisho dual document preparation',
      'Targeted keyword alignment with verified employer requirements'
    ]
  },
  {
    id: 'mod-2',
    title: 'Professional Communication Skills',
    subtitle: 'Cross-Cultural Workplace Fluency',
    description: 'Master interpersonal workplace communication that impresses international interviewers, including polite Japanese business honorifics, courteous English diction, and workplace etiquette.',
    points: [
      'The Japanese Hou-Ren-Sou (Report-Communicate-Consult) discipline',
      'Proper virtual meeting etiquette, lighting, and camera presence',
      'Professional email writing, polite inquiries, and follow-ups',
      'Active listening skills to overcome language barrier misunderstandings'
    ]
  },
  {
    id: 'mod-3',
    title: 'Interview Preparation & Mock Drills',
    subtitle: 'Competency-Based Interview Readiness',
    description: 'Prepare thoroughly for behavioral, technical, and situational interviews with simulated video calls, feedback sessions, and proven structured answering frameworks.',
    points: [
      'STAR Framework mastery: Situation, Task, Action, Result',
      'Roleplay simulations with recorded review and feedback',
      'Handling tricky behavioral questions with honesty and grace',
      'Salary expectation negotiation etiquette within legal local benchmarks'
    ]
  },
  {
    id: 'mod-4',
    title: 'International Opportunity Alignment',
    subtitle: 'Destinations & Visa Document Preparedness',
    description: 'Understand the exact prerequisites, skill criteria, and authentic documentation steps required for legal career avenues in Japan, Dubai, the UAE, and the Maldives.',
    points: [
      'Education and experience verification for Gulf employment visas',
      'Specified Skilled Worker (SSW) Tokutei Ginou skill and language benchmark matching',
      'Maldives luxury resort hospitality profile alignment',
      'Ministry of Foreign Affairs (MOFA) attestation and certified translations'
    ]
  }
];
