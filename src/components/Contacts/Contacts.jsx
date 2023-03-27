import css from 'components/Contacts/Contacts.module.css';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} data-key={id} className={css.item}>
            {name} : {number}{' '}
            <button onClick={() => deleteContact(id)} className={css.btn}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
