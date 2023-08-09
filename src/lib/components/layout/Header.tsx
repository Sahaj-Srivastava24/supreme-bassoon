import Logo from '../ui/logo-file';

const Header = () => {
  return (
    <header className="z-10 w-full text-C31327A mt-4 mb-6">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="flex gap-4">
          <Logo />
          <p className="font-bold text-xl">DROP</p>
        </div>

        <div>
          <ul className="list-none flex space-x-5">
            <li className="mx-3 my-2">Home</li>
            <li className="mx-3 my-2">Pricing</li>
            <li className="mx-3 my-2">FAQ</li>
            <li className="mx-3 my-2">Terms</li>
          </ul>
        </div>

        <div>
          <ul className="list-none flex space-x-5">
            <li className="mx-3 my-2">Login</li>
            <li className="text-white bg-C31327A px-3 py-2 rounded-lg ">
              Sign Up
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
