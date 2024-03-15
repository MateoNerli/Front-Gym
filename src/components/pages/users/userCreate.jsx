import { TextInput } from "./textInput";

export const UserCreate = () => {
  return (
    <div className="p-4 sm:ml-72">
      <h1>UserCreate</h1>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="first_name"
            label="Nombre"
            placeholder="John"
            type="text"
            required
          />
          <TextInput
            id="last_name"
            label="Apellido "
            placeholder="Doe"
            type="text"
            required
          />
          <TextInput
            id="company"
            label="Company"
            placeholder="Flowbite"
            type="text"
            required
          />
          <TextInput
            id="phone"
            label="Phone number"
            placeholder="123-45-678"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
          <TextInput
            id="website"
            label="Website URL"
            placeholder="flowbite.com"
            type="url"
            required
          />
          <TextInput
            id="visitors"
            label="Unique visitors (per month)"
            placeholder=""
            type="number"
            required
          />
        </div>
        <TextInput
          id="email"
          label="Email address"
          placeholder="john.doe@company.com"
          type="email"
          required
        />
        <TextInput
          id="password"
          label="Password"
          placeholder="•••••••••"
          type="password"
          required
        />
        <TextInput
          id="confirm_password"
          label="Confirm password"
          placeholder="•••••••••"
          type="password"
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
