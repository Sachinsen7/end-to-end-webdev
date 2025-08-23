export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>
        Profile <span>{params.id}</span>
      </p>
    </div>
  );
}
