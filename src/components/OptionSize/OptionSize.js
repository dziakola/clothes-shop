import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';

const OptionSize = props => {
    return(
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
        {props.sizes.map(size=>
            <li key={shortid()}>
                <button onClick={e=>
                    props.setSize(e.target.value)} 
                    value={size.names} 
                    type="button" 
                    className={clsx(size.names === props.currentSize && styles.active)}>
                    {size.names}
                </button>
            </li>
            )
        }
        </ul>
    </div>
    )
}
export default OptionSize;