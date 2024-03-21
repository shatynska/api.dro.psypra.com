export async function seedDimensionItems(prisma) {
  const psychologist = await prisma.dimensionItem.upsert({
    where: { alias: 'psychologist' },
    update: {},
    create: {
      alias: 'psychologist',
      title: 'психолог',
      dimension: {
        connect: { alias: 'specialties' },
      },
      description:
        "Це фахівець, який оцінює, діагно­стує і вивчає пове­дінку і розу­мові процеси. Деякі пси­хологи, такі як клі­нічні та психо­логи-консуль­танти, піклу­ються про пси­хічне здоров'я, соці­альні або орга­нізаційні психо­логи прово­дять дослі­дження та нада­ють психо­логічну допо­могу. <p>Пси­холог — не лікар, відпо­відно не ста­вить медич­них діаг­нозів, не лікує і не призначає лікарських препаратів. Психолог працює з психічно здоровими людьми, що мають якісь труднощі або потрапили в складну життєву ситуацію.<p>Переважно, до психолога звертаються в таких випадках як: травматичні та стресові ситуації: смерть, розлучення, насильство, тяжке захворювання, тощо. А також вагітність, народження дитини, переїзд на нове місце проживання, перехід на нову роботу й інше; коли людина відчуває різні труднощі та проблеми в ситуаціях спілкування та взаємодії з іншими людьми (близькими, дітьми, колегами.); коли є якісь тілесні симптоми або психосоматичні захворювання (наприклад, нейродерміт, вегетосудинна дистонія, синдром хронічної втоми та інші); коли людина відчуває, що «щось не так» з нею або з її оточенням і у неї є бажання поліпшити своє життя; а також будь-які інші причини, що вимагають підтримки або допомоги зовні.",
    },
    include: {
      dimension: true,
    },
  });

  const psychotherapist = await prisma.dimensionItem.upsert({
    where: { alias: 'psychotherapist' },
    update: {},
    create: {
      alias: 'psychotherapist',
      title: 'психотерапевт',
      dimension: {
        connect: { alias: 'specialties' },
      },
      description:
        "Психотерапевт – це фахівець у царині ментального здоров'я, який отримав додаткову освіту за одним із напрямків психотерапії (психоаналіз, гештальт, психодрама, системна сімейна, клієнт-центрована, тощо). Щоби здобувати освіту психотерапевта, потрібно мати диплом психолога, лікаря, соціального працівника або педагога. <p>Психотерапія - це немедикаментозний вплив, основними чинниками якого є слово, мовлення, а також мова тіла (міміка, жести, дії), зосередження на емоціях і їх вираженні. Мета усіх видів психотерапії – дати людині можливість задовольнити її природні потреби у любові, прийнятті, почутті контролю, особистісному зростанні, самореалізації. Психотерапія допомагає усунути або зменшити психологічні (тривога, страх, панічні атаки, фобії, залежності) та психосоматичні (тілесні, які викликані емоціями) симптоми, душевні страждання. А також це допомога у зміні стосунків, почуттів і поведінки, які заважають адаптації. Психотерапія допомагає клієнту зрозуміти себе і інших, покращити соціальну взаємодію, зменшити силу негативного стресу, пережити втрату, яка також є невід'ємною складовою життя. Усі напрямки психотерапії вважаються рівноцінними за ефективністю. Вони прямують до однієї мети – задоволення запиту клієнта, але рухаються різними шляхами, використовуючи різні інструменти і методи. Оберіть той напрямок, який вам більше до душі.",
    },
    include: {
      dimension: true,
    },
  });

  const psychiatrist = await prisma.dimensionItem.upsert({
    where: { alias: 'psychiatrist' },
    update: {},
    create: {
      alias: 'psychiatrist',
      title: 'психіатр',
      dimension: {
        connect: { alias: 'specialties' },
      },
      description:
        'Це лікар, що спе­ціалі­зується на психі­атрії, галузі меди­цини, що вивчає при­чини вини­кнення, про­яви, пере­біг, методи запо­бігання і ліку­вання пси­хічних розладів. Засто­совує сучасні мето­ди профі­лактики, діагно­стики, ліку­вання, реабі­літації та диспан­сери­зації хворих пси­хіатрич­ного профілю, надає їм шви­дку та невід­кладну меди­чну допо­могу. Здій­снює нагляд за побічними реакціями/діями лікарських засобів.',
    },
    include: {
      dimension: true,
    },
  });

  console.log({
    psychologist,
    psychotherapist,
    psychiatrist,
  });
}