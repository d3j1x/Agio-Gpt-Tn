<script>
    import { Spinner } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';

    import bannerlogo from "$lib/images/telegramchannel.jpg";


    import { calculateDateDifference } from '$lib/utils/dateDifference.js';

    let savedDate = '2024-08-13'; // Example saved date
    let daysDifference = calculateDateDifference(savedDate);
</script>




<div dir="ltr" class="justify-center items-center content-center text-center pt-28 pb-10">
    <Spinner color="purple" /> <span style="font-weight: bolder;" class="font-mono text-purple-700">&nbsp Upgrade in progress . . .</span>
    <br><br> <span style="font-weight: bold;" class="font-mono text-center">
        "The process has been ongoing for <span class="bg-slate-950 text-green-300 px-1 rounded">{daysDifference}</span> days and may take a total of <span class="text-red-600">7 to 12 days.</span>"</span>
</div>



<div dir="ltr" class="justify-center items-center content-center  m-2 md:m-10 lg:mx-28 text-lg md:text-2xl font-serif pt-2">
    <span class="justify-center items-center content-center text-center leading-relaxed">
    <span class="font-semibold">Dear users:<br></span>
    In order to protect the rights and interests of customers,
    the platform will be maintained and updated from time to time to improve the yield of the GPT version and the stability and security of the platform.<br>
    Currently, users in some regions/countries are temporarily unable to use it.<br>
    We understand the feelings of users.<br>
    The technical department is working hard to repair it.<br>
    We will notify you after the processing is completed.<br>
    Thank you for your understanding and support.
    </span>
</div>

<br><br>


<div dir="ltr" class="justify-center items-center content-center m-2 md:m-10 lg:mx-28 text-lg md:text-2xl font-serif">
    <span class="justify-center items-center content-center text-center leading-relaxed">
    <span class="font-semibold">Chers utilisateurs:<br></span>
    Afin de protéger les droits et les intérêts des clients,
    la plateforme sera maintenue et mise à jour de temps en temps pour améliorer le rendement de la version GPT ainsi que la stabilité et la sécurité de la plateforme.<br>
    Actuellement, les utilisateurs de certaines régions/pays ne peuvent temporairement pas l'utiliser.<br>
    Nous comprenons les sentiments des utilisateurs.<br>
    Le service technique travaille dur pour le réparer.<br>
    Nous vous informerons une fois le traitement terminé.<br>
    Merci pour votre compréhension et votre soutien.
    </span>
</div>

<br><br>

<div class="justify-center items-center content-center m-2 md:m-10 lg:mx-28 text-xl md:text-2xl font-serif">
    <span class="justify-center items-center content-center text-center leading-relaxed">
    <span class="font-semibold">عزيزي المستخدم:<br></span>
    ومن أجل حماية حقوق ومصالح العملاء،
    ستتم صيانة النظام الأساسي وتحديثه من وقت لآخر لتحسين إنتاجية إصدار GPT واستقرار النظام الأساسي وأمانه.<br>
    في الوقت الحالي، يتعذر على المستخدمين في بعض المناطق/البلدان استخدامه مؤقتًا.<br>
    نحن نتفهم مشاعر المستخدمين.<br>
    والجهاز الفني يعمل جاهدا على إصلاحه.<br>
    سنقوم بإخطارك بعد اكتمال المعالجة.<br>
    شكرا لتفهمك ودعمك.
    </span>
</div>



<img src={bannerlogo} class="shadow-2xl my-20 p-4 border-black flex justify-center items-center mx-auto max-h-dvh" alt="telegram channel" />

<Button href="https://t.me/AGIO_GPT99" target="_blank" rel="noreferrer" color="blue" class="flex justify-center content-center items-center text-center mx-auto max-w-60 mb-20">Join Us Telegram</Button>