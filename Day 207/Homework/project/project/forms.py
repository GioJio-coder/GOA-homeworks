from django import forms
from .models import Post  

class PostAddForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'category']

    def clean_title(self):
        title = self.cleaned_data.get('title')
        if len(title) < 5:
            raise forms.ValidationError("Title must be at least 5 characters long")
        return title

    def clean_content(self):
        content = self.cleaned_data.get('content')
        forbidden_words = ['spam', 'badword']  
        for word in forbidden_words:
            if word in content.lower():
                raise forms.ValidationError(f"Content contains forbidden word: {word}")
        return content