export default async function UserProfile({ params }: any) {
  const { id } = params;
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>
        Profile <span>{id}</span>
      </p>
    </div>
  );
}
