import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './styles.module.scss';

export function ContactForm() {
  const form = useForm();

  return (
    <section className={styles.background}>
      <div className={styles.content}>
        <section>
          <h4>Lorem ipsum</h4>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </section>
        <form>
          <Input
            label="Email"
            placeholder="Email"
            design="filled"
            {...form.register("email")}
          />

          <Button type="submit" design="primary">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
