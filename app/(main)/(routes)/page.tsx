/* eslint-disable react/no-unescaped-entities */
"use client";

import RightSidebar from "../_components/right-sidebar";
import LeftSidebar from "../_components/left-sidebar";

const positiveContext = [
  "Шёлковый абажур",
  "Плетёный абажур",
  "Шёлковый абажур",
  "Плетёный абажур",
  "Шёлковый абажур",
  "Плетёный абажур",
  "Шёлковый абажур",
  "Плетёный абажур",
];

const negativeContext = [
  "Под потолком подвала был устроен абажур, через который было видно небо и часть крыши соседнего флигеля; других окон не было.",
];

const TOP_OFFSET = 100;

export default function Home() {
  return (
    <div className="flex gap-8">
      <LeftSidebar />
      <div className="flex w-full flex-1 flex-col [&>*:last-child]:border-none [&>*:nth-child(n)]:border-b [&>*:nth-child(n)]:py-8">
        <div id="gesture" className="flex flex-col">
          <h2 className="text-[24px] font-bold text-neutral-100">Абажур</h2>
          <div className="flex items-center gap-2 text-[16px] text-muted-foreground">
            <span>Искаженный жест</span>
            <span>/</span>
            <span>Современный</span>
            <span>/</span>
            <span>Международный</span>
          </div>
          <video className="mt-6" src="/jest.webm" controls />
          <img className="object-contain" src="/jest.jpg" alt="Жест" />
        </div>
        <div id="words" className="flex flex-col gap-4">
          <h2 className="text-[24px] font-bold text-neutral-100">Слова</h2>
          <p className="text-[16px] font-thin leading-7 text-neutral-200">
            ава, австралийский хилер, азавак, айну, акита-ину, алано, алько,
            аляскинский маламут, апсо, арапчик, арлекин, арликон, арьежский
            брак, афган, аффен-пинчер, аще, бабиш, бавар аппенцельский, бавар
            энтлебухский, барбе, барбет, барбетка, Барбос, барбосина, басенджи,
            бассет артезиано-нормандский, бассет голубой гасконский, бассет
            гриффон вендин, бассет фов де бретань, бассет-гриффон, бассет-хаунд,
            бедлингтон-терьер, бельгийская овчарка, бигль, бигль-харьер, бийи,
            билли, бишон-фриз, бладхаунд, блошарик, блэк энд тэн кунхаунд,
            Бобик, бобтейл, боксёр, болонка, болоньез, бордер-колли
          </p>
        </div>
        <div id="naming-of-concepts" className="flex flex-col gap-4">
          <h2 className="text-[24px] font-bold text-neutral-100">
            Наименование понятий
          </h2>
          <p className="text-[16px] font-thin leading-7 text-neutral-200">
            абажур (абажур); абажур (освещение); абажур (плафон); абажур
            (светильник); абажур (источник освещения); абажур (настольная
            лампа); абажур (осветительный прибор); абажур (фонарь)
          </p>
        </div>
        <div id="positive-context" className="flex flex-col gap-4">
          <h2 className="text-[24px] font-bold text-neutral-100">
            Положительный контекст
          </h2>
          <ol className="list-inside list-decimal text-[16px] font-thin leading-7 text-neutral-200">
            {positiveContext.map((item, i) => (
              <li key={i}>{item}.</li>
            ))}
          </ol>
        </div>
        <div id="negative-context" className="flex flex-col gap-4">
          <a className="text-[24px] font-bold text-neutral-100">
            Отрицательный контекст
          </a>
          <ol className="list-inside list-decimal text-[16px] font-thin leading-7 text-neutral-200">
            {negativeContext.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>
        <div id="description" className="flex flex-col gap-4">
          <h2 className="text-[24px] font-bold text-neutral-100">Описание</h2>
          <p className="text-[16px] font-thin leading-7 text-neutral-200">
            Показывается жест "Свет":
          </p>
          <ul className="list-inside list-disc text-[16px] font-thin leading-7 text-neutral-200">
            <li>
              кисть правой руки на уровне глаз или выше в "Е-конфигурации";
            </li>
            <li>
              коротко двигаясь вниз и напротив лица, раскрывается в
              "5-конфигурацию", ладонь обращена вниз и чуть влево;
            </li>
            <li>
              в этот момент к ней подносится левая рука уже раскрытая в
              "5-конфигурацию" и обращённая ладонью вниз и чуть вправо;
            </li>
            <li>
              из этого положения (напротив лица), обе кисти рук расходясь
              движутся вниз, как бы обхватывая контур абажура.
            </li>
          </ul>
        </div>
        <div id="etymology" className="flex flex-col gap-4">
          <a className="text-[24px] font-bold text-neutral-100">Этимология</a>
          <p className="text-[16px] font-thin leading-7 text-neutral-200">
            Иконичный жест по внешнему виду предмета.
          </p>
        </div>
        <div id="bibliography" className="flex flex-col gap-4">
          <a className="text-[24px] font-bold text-neutral-100">Библиография</a>
          <ol className="list-inside list-decimal text-[16px] font-thin leading-7 text-neutral-200">
            <li>
              Гейльман И. Ф., Специфические средства общения глухих. часть 1-4,
              ЛВЦ ВОГ, Ленинград, 1975-1978;
            </li>
            <li>
              Гуленков Геннадий Алексеевич, Центр информатизации, социальных
              технологических исследований и социологического анализа (Центр
              ИСТИНА), Электронная обучающая система (ЭОС) "Русский жестовый
              язык", Электронное, CD, Москва, 2001.
            </li>
          </ol>
        </div>
      </div>
      <RightSidebar isScrolled={true} />
    </div>
  );
}
