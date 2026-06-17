from django.shortcuts import render

admins_database = [
    {'id': 0, 'admin_name': 'aleksandre', 'role': 'main_staff', 'email': 'aleksandre@company.com'},
    {'id': 1, 'admin_name': 'giorgi', 'role': 'moderator', 'email': 'giorgi@company.com'},
    {'id': 2, 'admin_name': 'nino', 'role': 'support_lead', 'email': 'nino@company.com'},
    {'id': 3, 'admin_name': 'luka', 'role': 'editor', 'email': 'luka@company.com'}
]

def all_admins(request):
    return render(request, 'admins/all_admins.html', {'admins': admins_database})

def admin_detail(request, admin_id):
    admin = next((a for a in admins_database if a['id'] == admin_id), None)
    if admin is None:
        raise Http404("ადმინისტრატორი ვერ მოიძებნა")
    return render(request, 'admins/admin_detail.html', {'admin': admin})