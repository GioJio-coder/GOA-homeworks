from django.shortcuts import render
from .forms import RegisterForm


def register_view(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            # მონაცემების ავტომატურად შენახვა ბაზაში
            user = form.save()
            return redirect("success_page")  # გადამისამართება წარმატების გვერდზე
    else:
        form = RegisterForm()

    return render(request, "register.html", {"form": form})