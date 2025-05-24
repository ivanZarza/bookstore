import { Injectable } from '@angular/core';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class ServiceBookService {

  private url: string;
  public arrayBooks: Book[] = [];
  public respuesta: number;

  constructor() {
    // this.url = 'http://localhost:3000';
    this.url = 'https://bookstore-server-seven.vercel.app';
    this.arrayBooks = null;
    this.respuesta 
  }

  public async getBooks({ /* id_user = null, */ id_book = null }= {}) {
    const url = new URL(`${this.url}/books`);
    try {
    /*   if(id_user) {
      url.searchParams.append('id_user', id_user);
    } */
    if(id_book) {
      url.searchParams.append('id_book', id_book);
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    if (!response.ok) {
      if (response.status === 401) {
        // Redirige al login si no autorizado
        window.location.href = '/login';
        return;
      }
      throw new Error('Error en la solicitud');
    }
    const data = await response.json();
    this.arrayBooks = data.data;
    this.respuesta = response.status;
  } catch (error) {
    console.error('Error:', error);
    // Si el error es de autenticación, también puedes redirigir aquí
    window.location.href = '/login';
  }
}

  public async add(book: Book) {
    try {
      const response = await fetch(`${this.url}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({book})
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      this.respuesta= response.status
      console.log(this.respuesta);
    } catch (error) {
      console.error('Error:', error);
  }
}

  public async edit(book: Book) {
    try {
      const response = await fetch(`${this.url}/books`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ book })
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      this.respuesta = response.status;
      console.log(this.respuesta);
    } catch (error) {
      console.error('Error:', error);
    }

  }

  public async delete(id_book: number/* , id_user: number */) {
    try {
      const response = await fetch(`${this.url}/books`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id_book /* , id_user  */})
      });
      if (!response) {
        throw new Error('Error en la solicitud');
      }
      this.respuesta= response.status
      console.log(this.respuesta);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
