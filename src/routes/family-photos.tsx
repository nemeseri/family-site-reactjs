import { createFileRoute } from '@tanstack/react-router'
import '../assets/family-photos.css';

export const Route = createFileRoute('/family-photos')({
  component: FamilyPhotos,
})

function FamilyPhotos() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='familyPhotosPasscode'>Passcode</label>
      <input id='familyPhotosPasscode' name='passcode' placeholder="••••••••••" type='password' />
      <button type='submit'>Submit</button>
    </form>
  );
}