from django.contrib import admin
from .models import ChaiVarity, TeaReviews, TeaCertificate, Store



# Register your models here.

class TeaReviewInline(admin.TabularInline):
    model = TeaReviews
    extra = 2

class TeaVarietyAdmin(admin.ModelAdmin):
    list_display = {'name', 'type', 'date_added',}
    inlines = [TeaReviewInline]

class StoreAdmin(admin.ModelAdmin):
    list_display = {'name', 'location'}
    filter_horizontal = ('chai_variety',)

class TeaCertificateAdmin(admin.ModelAdmin):
    list_display = {'tea', 'certificate_number',}


admin.site.register(Store, StoreAdmin)
admin.site.register(TeaReviews)
admin.site.register(TeaCertificate)

admin.site.register(ChaiVarity, TeaVarietyAdmin)
