import random
from django.core.mail import send_mail
from django.shortcuts import render, redirect

def send_otp_view(request):
    if request.method == 'POST':
        otp = random.randint(100000, 999999)
        request.session['otp'] = otp
        # შენახული მომხმარებლის ელ-ფოსტა სესიიდან
        email = request.session.get('temp_email') 
        
        send_mail(
            'თქვენი 2FA კოდი',
            f'თქვენი დადასტურების კოდია: {otp}',
            'your_email@gmail.com',
            [email],
            fail_silently=False,
        )
        return redirect('verify_otp')
    return render(request, 'send_otp.html')

def verify_otp_view(request):
    if request.method == 'POST':
        user_otp = request.POST.get('otp')
        if str(request.session.get('otp')) == str(user_otp):
            # წარმატებული ავტორიზაცია / რეგისტრაციის დასრულება
            return redirect('chat')
        else:
            error = "არასწორი კოდი!"
            return render(request, 'verify_otp.html', {'error': error})
    return render(request, 'verify_otp.html')