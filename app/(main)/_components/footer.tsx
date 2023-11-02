/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-[1200px] items-start justify-between gap-4 px-8 py-6 text-sm text-muted-foreground">
        <div className="flex w-[600px] flex-col gap-2">
          <p>
            Словарь не завершён и находится на стадии наполнения;
            <br />
            незавершённые статьи отмечены знаком * (звёздочка).
          </p>
          <p>Текущий этап: подбор синонимов русского языка к жестам.</p>
          <p>
            Многозначные слова составляют около 80% словарного состава русского
            языка,
            <br />
            соответственно, они переводятся на жестовый язык более чем одним
            жестом.
          </p>
        </div>
        <div className="flex w-[400px] flex-col gap-1 text-right">
          <p>© ЭСАС "Русско-жестовый толковый словарь"; 1997-2023</p>
          <p>© А. Е. Харламенков; 1997-2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
