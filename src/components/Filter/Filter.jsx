import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter_container}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
