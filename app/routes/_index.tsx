import { redirect } from '@remix-run/node';

export const loader = async () => {
  return redirect(`/landing`);
};

export default function Index() {
  return null;
}
