from .models import Todo  # დარწმუნდით, რომ მოდელს სწორად აიმპორტებთ

def get_all_todos():
    """აბრუნებს ყველა Todo ჩანაწერს მონაცემთა ბაზიდან."""
    return Todo.objects.all()


def add_todo(title, description=None):
    """
    ქმნის და ინახავს ახალ Todo ჩანაწერს.
    იღებს სათაურს (title) და არასავალდებულო აღწერას (description).
    """
    todo = Todo.objects.create(
        title=title,
        description=description
    )
    return todo


def delete_todo(todo_id):
    """
    პოულობს და შლის Todo ჩანაწერს ID-ის მიხედვით.
    აბრუნებს True-ს თუ წაიშალა, ან False-ს თუ ID ვერ მოიძებნა.
    """
    try:
        todo = Todo.objects.get(id=todo_id)
        todo.delete()
        return True
    except Todo.DoesNotExist:
        return False