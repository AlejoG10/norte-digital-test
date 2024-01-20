import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const AuthError = () => {
  return (
    <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>Invalid credentials</p>
    </div>
  );
};

export default AuthError;
