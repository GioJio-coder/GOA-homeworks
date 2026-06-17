from django.shortcuts import render
from django.http import HttpResponse

DATA = {
    'alta': {
        'hp': 'HP Pavilion - 15.6" FHD, AMD Ryzen 5, 16GB RAM, 512GB SSD.',
        'samsung': 'Samsung Galaxy Book4 - 15.6" FHD, Intel Core 5, 8GB RAM, 512GB SSD.',
        'apple': 'MacBook Air 13" - Apple M3 chip, 8-core CPU, 10-core GPU, 8GB RAM, 256GB SSD.'
    },
    'zoomer': {
        'lenovo': 'Lenovo Legion 5 - 15.6" WQHD, AMD Ryzen 7, RTX 4060, 16GB RAM.',
        'acer': 'Acer Nitro V15 - 15.6" FHD 144Hz, Intel i5, RTX 4050, 16GB RAM.',
        'macbook': 'MacBook Pro 14" - Apple M3 Pro chip, 18GB RAM, 512GB SSD.'
    },
    'ultra': {
        'dell': 'Dell XPS 13 - 13.4" FHD+, Intel Core Ultra 7, 16GB RAM, 1TB SSD.',
        'msi': 'MSI Cyborg 15 - 15.6" FHD 144Hz, Intel i7, RTX 4060, 16GB RAM.',
        'gigabyte': 'Gigabyte G5 - 15.6" FHD 144Hz, Intel i5, RTX 4050, 8GB RAM.'
    },
    'athome': {
        'toshiba': 'Toshiba Dynabook - 15.6" HD, Intel Core i3, 8GB RAM, 256GB SSD.',
        'fujitsu': 'Fujitsu Lifebook - 14" FHD, Intel Core i5, 16GB RAM, 512GB SSD.',
        'huawei': 'Huawei MateBook D16 - 16" FHD, Intel i5, 16GB RAM, 512GB SSD.'
    }
}

def store_view(request, store):
    if store not in DATA:
        raise("Store not found")
    
    models = DATA[store].keys()
    return HttpResponse(f"<h1>{store.upper()} Laptops</h1><ul>{links}</ul>")

def laptop_view(request, store, model):
    if store in DATA and model in DATA[store]:
        return HttpResponse(f"<h1>{model.upper()} Details ({store.upper()})</h1><p>{DATA[store][model]}</p>")
    raise("Laptop not found")