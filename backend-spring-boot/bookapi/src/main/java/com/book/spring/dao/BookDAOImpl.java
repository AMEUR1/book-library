package com.book.spring.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.book.spring.model.Book;

@Repository
public class BookDAOImpl implements BookDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public long save(Book book) {
		sessionFactory.getCurrentSession().save(book);
		return book.getId();
	}

	@Override
	public Book get(long id) {
		//return sessionFactory.getCurrentSession().byId(Book.class).load(id);

		return sessionFactory.getCurrentSession().get(Book.class, id);
	}

	@Override
	public List<Book> getAll() {

		List<Book> listOfBooks = sessionFactory.getCurrentSession().createQuery("from Book").list();
		return listOfBooks;
	}

	@Override
	public void update(long id, Book book) {
		Session session=sessionFactory.getCurrentSession();
		Book oldBook=session.byId(Book.class).load(id);
		oldBook.setAuthor(book.getAuthor());
		oldBook.setTitle(book.getTitle());
		session.flush();
	}

	@Override
	public void delete(long id) {
		Session session=sessionFactory.getCurrentSession();
		Book book=session.byId(Book.class).load(id);
		session.delete(book);
	}

}
