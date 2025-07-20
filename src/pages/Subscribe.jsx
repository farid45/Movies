import { Form } from 'react-router-dom';

export default function Subscribe() {
  return (
    <div className="page-content subscribe-form">
      <h1>Подписаться на новости</h1>
      <Form method="post">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Имя:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">
          Подписаться
        </button>
      </Form>
    </div>
  );
}