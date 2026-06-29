from django.shortcuts import render
from django.http import Http404, HttpResponse

movies_database = [
    {"id": 0, "title": "Inception", "director": "Christopher Nolan", "year": 2010},
    {"id": 1, "title": "The Matrix", "director": "Lana Wachowski, Lilly Wachowski", "year": 1999},
    {"id": 2, "title": "Interstellar", "director": "Christopher Nolan", "year": 2014},
    {"id": 3, "title": "Pulp Fiction", "director": "Quentin Tarantino", "year": 1994},
    {"id": 4, "title": "The Dark Knight", "director": "Christopher Nolan", "year": 2008}
]

def movie_list(request):
    return render(request, 'movies/movie_list.html', {'movies': movies_database})

def movie_detail(request, movie_id):
    movie = next((m for m in movies_database if m['id'] == movie_id), None)
    if movie is None:
        raise Http404()
    return render(request, 'movies/movie_detail.html', {'movie': movie})

def movie_year(request, movie_id):
    movie = next((m for m in movies_database if m['id'] == movie_id), None)
    if movie is None:
        raise Http404()
    return HttpResponse({movie['year']})