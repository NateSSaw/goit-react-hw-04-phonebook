import css from 'components/Filter/Filter.module.css';

export default function Filter({ updateFilter, filterValue }) {
  const onChange = e => {
    updateFilter(e.target.value);
  };

  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          className={css.input}
          onChange={onChange}
          value={filterValue}
        />
      </label>
    </div>
  );
}
