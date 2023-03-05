export const Footer = () => {
  return (
    <div className="w-full border-t border-white/10 text-zinc-500 bg-zinc-800/20">
      <nav className="pack-content w-full flex flex-col min-h-[20rem]">
        <ul className="py-8 mt-auto">
          <li className="text-center">
            {
              "Made by Sam Alhaqab. This is a demo site made for Lex Fridman, some things may not work fully. All content belongs to Lex Fridman."
            }
          </li>
          <li className="text-center">
            {"You can contact me here: holxsam.dev@gmail.com"}
          </li>
        </ul>
      </nav>
    </div>
  );
};
